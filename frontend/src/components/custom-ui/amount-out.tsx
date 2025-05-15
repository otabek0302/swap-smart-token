'use client';

import { useState } from 'react';
import { Pool, Token } from '@/interfaces/interface';
import { getCounterPartTokens, findPoolByTokens } from '@/lib/helper';
import { useAccount, useBalance } from 'wagmi';

interface AmountOutProps {
  pools: Pool[];
  selectedToken: Token | null;
  amountIn: string;
  onTokenSelect?: (token: Token) => void;
}

export function AmountOut({ pools, selectedToken, amountIn, onTokenSelect }: AmountOutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [toToken, setToToken] = useState<Token | null>(null);
  const { address } = useAccount();
  const counterpartTokens = selectedToken ? getCounterPartTokens(pools, selectedToken) : [];

  const { data: balance } = useBalance({
    address,
    token: toToken?.address as `0x${string}`,
    query: {
      enabled: !!toToken && !!address,
    },
  });

  const handleTokenSelect = (token: Token) => {
    setToToken(token);
    setIsOpen(false);
    onTokenSelect?.(token);
  };

  // Calculate output amount based on pool reserves
  const calculateOutputAmount = () => {
    if (!selectedToken || !toToken || !amountIn || amountIn === '0') return '0.0';

    const pool = findPoolByTokens(pools, selectedToken, toToken);
    if (!pool) return '0.0';

    // TODO: Implement actual swap calculation using pool reserves
    // This is a placeholder that should be replaced with the actual calculation
    return (parseFloat(amountIn) * 0.997).toFixed(6);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">You Receive</label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Balance: {balance?.formatted || '0.0'}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 border rounded-lg">
        <input type="text" value={calculateOutputAmount()} readOnly placeholder="0.0" className="flex-1 bg-transparent outline-none" />
        <div className="relative z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="px-2 py-1 text-sm bg-white/5 rounded hover:bg-white/10 flex items-center gap-1">
            {toToken?.symbol || 'Select Token'}
            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute w-full h-full right-0 mt-1 w-48 bg-background border rounded-lg shadow-lg z-50">
              {counterpartTokens.map((token) => (
                <button key={token.address} onClick={() => handleTokenSelect(token)} className="w-full px-4 py-2 text-left hover:bg-white/5 flex items-center gap-2">
                  <span>{token.symbol}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
