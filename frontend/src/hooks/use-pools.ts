'use client';

import { useEffect, useState } from "react";
import { useReadContract, useReadContracts } from 'wagmi';
import { contracts } from "../contracts";
import { AOG_ADDRESS, FACTORY_ADDRESS } from "../lib/config";
import { Pool } from "../interfaces/interface";
import { Abi } from 'viem';

export const usePools = () => {
  const [pools, setPools] = useState<Pool[]>([]);
  const [loading, setLoading] = useState(true);


  // 1. Read all pairs directly
  const { data: allPairs, status: pairsStatus, error: pairsError } = useReadContract({
    address: FACTORY_ADDRESS,
    abi: contracts.MiniSwapFactory.abi as Abi,
    functionName: 'getAllPairs',
  }) as { data: `0x${string}`[] | undefined, status: string, error: Error | null };

  // 2. Fetch tokenA, tokenB, and rate from each pair
  const { data: tokenInfo, status: tokenInfoStatus } = useReadContracts({
    contracts: (allPairs || []).map((address) => [
      { address, abi: contracts.MiniSwap.abi as Abi, functionName: 'tokenA' },
      { address, abi: contracts.MiniSwap.abi as Abi, functionName: 'tokenB' },
      { address, abi: contracts.MiniSwap.abi as Abi, functionName: 'rate' },
    ]).flat(),
    query: {
      enabled: !!allPairs?.length && pairsStatus === 'success',
    },
  });
  
  

  // 3. Build final pool list
  useEffect(() => {

    // Reset loading state if there's an error in the initial contract call
    if (pairsError) {
      console.error('Error fetching pairs:', pairsError);
      setLoading(false);
      return;
    }

    // If we have no pairs, we're done loading
    if (!allPairs?.length) {
      // console.log('No pairs found, setting empty pools');
      setPools([]);
      setLoading(false);
      return;
    }

    // If we're still waiting for data, keep loading
    if (!tokenInfo || pairsStatus !== 'success' || tokenInfoStatus !== 'success') {
      // console.log('Waiting for data to be ready');
      return;
    }

    const result: Pool[] = [];

    for (let i = 0; i < allPairs.length; i++) {
      const [tokenA, tokenB, rate] = tokenInfo.slice(i * 3, i * 3 + 3);

      if (
        tokenA?.status === 'success' &&
        tokenB?.status === 'success' &&
        rate?.status === 'success'
      ) {
        const tokenAAddress = tokenA.result as string;
        const tokenBAddress = tokenB.result as string;

        result.push({
          address: allPairs[i],
          rate: rate.result as bigint,
          token0: {
            address: tokenAAddress,
            symbol: tokenAAddress === AOG_ADDRESS ? "AOG" : "AOS",
            decimals: 18,
          },
          token1: {
            address: tokenBAddress,
            symbol: tokenBAddress === AOG_ADDRESS ? "AOG" : "AOS",
            decimals: 18,
          },
        });
      }
    }
    
    setPools(result);
    setLoading(false);
  }, [allPairs, tokenInfo, pairsError, pairsStatus, tokenInfoStatus]);

  return { pools, loading };
};