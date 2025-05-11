'use client';

import { AmountIn } from './amount-in';
import { AmountOut } from './amount-out';

export function SwapToken() {
  return (
    <div className="px-4 py-6 w-full max-w-lg h-full border-[0.5px] border-gray-50 rounded-2xl shadow-xl gradient-border">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold text-primary">Swap Token</h2>
      </div>
      <div className="p-4">
        <div className="space-y-6">
          <AmountIn />
          <AmountOut />
          <div className="flex items-center justify-center">
            <button className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2 rounded-lg cursor-pointer">Swap</button>
          </div>
        </div>
      </div>
    </div>
  );
}
