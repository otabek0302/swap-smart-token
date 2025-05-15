'use client';

import { useState } from 'react';
import { Pool, Token } from '@/interfaces/interface';
import { AmountIn } from './amount-in';
import { AmountOut } from './amount-out';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

interface SwapTokenProps {
  pools: Pool[];
}

export function SwapToken({ pools }: SwapTokenProps) {
  const [fromToken, setFromToken] = useState<Token | null>(null);
  const [toToken, setToToken] = useState<Token | null>(null);
  const [amountIn, setAmountIn] = useState('');
  const [amountOut, setAmountOut] = useState('');

  return (
    <div className="px-4 py-6 w-full max-w-lg h-full border-[0.5px] border-gray-50 rounded-2xl shadow-xl gradient-border">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold text-primary">Swap Token</h2>
      </div>
      <div className="p-4">
        <div className="space-y-6">
          <AmountIn pools={pools} onTokenSelect={setFromToken} onAmountChange={setAmountIn} />
          <AmountOut pools={pools} selectedToken={fromToken} amountIn={amountIn} onTokenSelect={setToToken} />

          <div className="flex flex-col items-center justify-center gap-2">
            <button className="w-full bg-primary hover:bg-primary/80 disabled:bg-gray-500 text-white font-bold py-2 rounded-lg cursor-pointer disabled:cursor-not-allowed">Swap</button>
          </div>
        </div>
      </div>
    </div>
  );
}
