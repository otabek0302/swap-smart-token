'use client';

import { useEffect, useState } from 'react';
import { Pool, Token } from '@/interfaces/interface';
import { getAvailableToken } from '@/lib/helper';
import { useAccount, useBalance } from 'wagmi';

interface AmountInProps {
  pools: Pool[];
  onTokenSelect?: (token: Token) => void;
  onAmountChange?: (amount: string) => void;
}

export function AmountIn({ pools, onTokenSelect, onAmountChange }: AmountInProps) {
  const { address } = useAccount();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [amount, setAmount] = useState('');

  const availableTokens = getAvailableToken(pools);

  const { data: balance, refetch } = useBalance({
    address,
    token: selectedToken?.address as `0x${string}`,
    query: {
      enabled: !!selectedToken && !!address,
    },
  });

  const handleTokenSelect = (token: Token) => {
    setSelectedToken(token);
    setIsOpen(false);
    onTokenSelect?.(token);
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    onAmountChange?.(value);
  };

  useEffect(() => {
    if (selectedToken) {  
      refetch();
    }
  }, [selectedToken, refetch]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">You Pay</label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Balance: {balance?.formatted || '0.0'}</span>
          <button onClick={() => handleAmountChange(balance?.formatted || '0')} className="text-sm text-primary hover:text-primary/80">
            MAX
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 border border-gray-100 dark:border-gray-500 rounded-lg">
        <input type="number" value={amount} onChange={(e) => handleAmountChange(e.target.value)} placeholder="0.0" className="flex-1 bg-transparent outline-none" />
        <div className="relative w-30 z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="px-2 py-1 w-full text-sm bg-black/5 dark:bg-white/5 rounded hover:bg-white/10 flex items-center justify-end gap-1">
            {selectedToken?.symbol || 'Select Token'}
            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute w-full right-0 mt-1 w-48 h-30 p-2 space-y-2 bg-background border rounded-lg shadow-lg z-50">
              {availableTokens.map((token) => (
                <button key={token.address} onClick={() => handleTokenSelect(token)} className="w-full px-4 py-1 text-left rounded-lg hover:bg-black/5 dark:hover:bg-white/15 flex items-center gap-2 cursor-pointer">
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
