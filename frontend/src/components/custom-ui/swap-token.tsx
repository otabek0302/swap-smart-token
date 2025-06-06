'use client';

import { useState, useEffect } from 'react';
import { Pool, Token } from '@/interfaces/interface';
import { AmountIn } from './amount-in';
import { AmountOut } from './amount-out';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { toast } from 'sonner';

interface SwapTokenProps {
  pools: Pool[];
}

export function SwapToken({ pools }: SwapTokenProps) {
  const { address } = useAccount();

  const [fromToken, setFromToken] = useState<Token | null>(null);
  const [toToken, setToToken] = useState<Token | null>(null);
  const [amountIn, setAmountIn] = useState('');
  const [amountOut, setAmountOut] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [txStatus, setTxStatus] = useState<'success' | 'fail' | null>(null);

  const miniSwapAddress = process.env.NEXT_PUBLIC_MINI_SWAP_ADDRESS as `0x${string}`;

  // Read allowance
  const { data: allowance } = useReadContract({
    address: fromToken?.address as `0x${string}`,
    abi: [
      {
        name: 'allowance',
        type: 'function',
        stateMutability: 'view',
        inputs: [
          { name: 'owner', type: 'address' },
          { name: 'spender', type: 'address' },
        ],
        outputs: [{ name: '', type: 'uint256' }],
      },
    ],
    functionName: 'allowance',
    args: [address as `0x${string}`, miniSwapAddress],
    query: {
      enabled: !!address && !!fromToken,
    },
  });

  // Get amount out from contract
  const { data: amountOutFromContract } = useReadContract({
    address: miniSwapAddress,
    abi: [
      {
        name: 'getAmountOut',
        type: 'function',
        stateMutability: 'view',
        inputs: [
          { name: 'amountIn', type: 'uint256' },
          { name: 'from', type: 'address' },
          { name: 'to', type: 'address' },
        ],
        outputs: [{ name: '', type: 'uint256' }],
      },
    ],
    functionName: 'getAmountOut',
    args: [amountIn ? parseEther(amountIn) : BigInt(0), fromToken?.address as `0x${string}`, toToken?.address as `0x${string}`],
    query: {
      enabled: !!fromToken && !!toToken && !!amountIn && amountIn !== '0',
    },
  });

  // Update amountOut when contract returns new value
  useEffect(() => {
    if (amountOutFromContract) {
      const formattedAmount = formatEther(amountOutFromContract);
      setAmountOut(formattedAmount);
    }
  }, [amountOutFromContract]);

  // Approve transaction
  const { writeContractAsync: approve } = useWriteContract();

  // Swap transaction
  const { writeContractAsync: swap } = useWriteContract();

  const handleSwap = async () => {
    if (!fromToken || !toToken || !amountIn || !amountOut) return;

    // Validate input
    if (isNaN(Number(amountIn))) {
      toast.error('Please enter a valid amount');
      return;
    }

    // Debug logging
    console.log('Swap attempt:', {
      from: {
        symbol: fromToken.symbol,
        address: fromToken.address,
      },
      to: {
        symbol: toToken.symbol,
        address: toToken.address,
      },
      amountIn,
      amountOut,
      allowance: allowance ? formatEther(allowance) : '0',
    });

    // Validate token pair
    const pool = pools.find((p) => (p.token0.address === fromToken.address && p.token1.address === toToken.address) || (p.token0.address === toToken.address && p.token1.address === fromToken.address));

    if (!pool) {
      toast.error('Invalid token pair. Please select tokens from the same pool.');
      return;
    }

    try {
      setIsLoading(true);
      setTxHash(null);
      setTxStatus(null);
      const amountInWei = parseEther(amountIn);
      const fromTokenAddress = fromToken.address as `0x${string}`;
      const toTokenAddress = toToken.address as `0x${string}`;

      // Check if approval is needed with proper BigInt comparison
      if (!allowance || BigInt(allowance.toString()) < amountInWei) {
        // Request approval
        const approvalResult = await approve({
          address: fromTokenAddress,
          abi: [
            {
              name: 'approve',
              type: 'function',
              stateMutability: 'nonpayable',
              inputs: [
                { name: 'spender', type: 'address' },
                { name: 'amount', type: 'uint256' },
              ],
              outputs: [{ name: '', type: 'bool' }],
            },
          ],
          functionName: 'approve',
          args: [miniSwapAddress, amountInWei],
        });

        if (approvalResult) {
          setTxHash(approvalResult);
          toast.success('Approval successful!');
        }
        return;
      }

      // Execute swap with gas limit fallback
      const swapResult = await swap({
        address: miniSwapAddress,
        abi: [
          {
            name: 'swap',
            type: 'function',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'amountIn', type: 'uint256' },
              { name: 'tokenIn', type: 'address' },
              { name: 'tokenOut', type: 'address' },
            ],
            outputs: [{ name: '', type: 'uint256' }],
          },
        ],
        functionName: 'swap',
        args: [amountInWei, fromTokenAddress, toTokenAddress],
        gas: BigInt(300000), // Add gas limit fallback
      });

      if (swapResult) {
        setTxHash(swapResult);
        toast.success('Swap transaction sent!');
      }
    } catch (error: unknown) {
      console.error('Swap error:', error);

      // Handle specific error types
      if (error instanceof Error) {
        const errorMessage = error.message;

        // Handle MetaMask rejection
        if (errorMessage.includes('User rejected') || errorMessage.includes('User denied')) {
          toast.error('Transaction was rejected. Please try again.');
          setTxStatus('fail');
          return;
        }

        // Handle contract errors
        if (errorMessage.includes('execution reverted')) {
          if (errorMessage.includes('Insufficient liquidity')) {
            toast.error('Insufficient liquidity in the pool. Please try a smaller amount.');
          } else {
            toast.error(`Transaction failed: ${errorMessage}`);
          }
        } else {
          toast.error('Transaction failed. Please try again.');
        }
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }

      setTxStatus('fail');
    } finally {
      setIsLoading(false);
    }
  };

  const {
    data: receipt, isSuccess, isError } = useWaitForTransactionReceipt({
    hash: txHash as `0x${string}`,
    query: {
      enabled: !!txHash,
    },
  });

  // Update transaction status based on receipt
  useEffect(() => {
    if (isSuccess && receipt) {
      setTxStatus('success');
      toast.success('Transaction confirmed!');
    } else if (isError) {
      setTxStatus('fail');
      toast.error('Transaction failed.');
    }
  }, [isSuccess, isError, receipt]);

  if (!address) {
    return (
      <div className="px-4 py-6 w-full max-w-lg h-full border-[0.5px] border-gray-50 rounded-2xl shadow-xl gradient-border flex items-center justify-center">
        <p className="text-lg text-center text-gray-500">Please connect your wallet to start swapping</p>
      </div>
    );
  }

  const getButtonText = () => {
    if (isLoading) {
      return 'Processing...';
    }
    if (txHash && !txStatus) {
      return 'Confirming...';
    }
    if (txStatus === 'success') {
      return 'Swap Successful!';
    }
    if (txStatus === 'fail') {
      return 'Swap Failed - Try Again';
    }
    return 'Swap';
  };

  const isButtonDisabled = !fromToken?.address || !toToken?.address || !amountIn?.trim() || !amountOut?.trim() || isLoading || (txHash && !txStatus);

  return (
    <div className="px-4 py-6 w-full max-w-lg h-full border-[0.5px] border-gray-50 rounded-2xl shadow-xl gradient-border">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold text-primary">Swap Token</h2>
      </div>
      <div className="p-4">
        <div className="space-y-6">
          <AmountIn pools={pools} onTokenSelect={setFromToken} onAmountChange={setAmountIn} />
          <AmountOut pools={pools} selectedToken={fromToken} amountIn={amountIn} amountOut={amountOut} onTokenSelect={setToToken} disabled={!fromToken} />

          {txHash && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer" className={`text-sm break-all z-50 ${txStatus === 'fail' ? 'text-red-500' : txStatus === 'success' ? 'text-green-500' : 'text-gray-400'}`}>
                  Transaction Hash: {txHash}
                </a>
                {txStatus && <span className={`px-2 py-1 rounded-full text-xs font-medium ${txStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{txStatus === 'success' ? 'Success' : 'Failed'}</span>}
              </div>
              {!txStatus && <p className="text-sm text-gray-400">Waiting for confirmation... This may take a few moments.</p>}
            </div>
          )}

          <div className="flex flex-col items-center justify-center gap-2 z-40">
            <button className={`w-full font-bold py-2 rounded-lg cursor-pointer disabled:cursor-not-allowed z-40 ${txStatus === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : txStatus === 'fail' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-primary hover:bg-primary/80 disabled:bg-gray-500 text-white'}`} disabled={isButtonDisabled || !txHash} onClick={handleSwap}>
              {getButtonText()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
