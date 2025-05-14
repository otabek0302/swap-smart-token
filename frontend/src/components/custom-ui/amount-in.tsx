'use client';

interface AmountInProps {
  initialPrice: number;
}

export function AmountIn({ initialPrice }: AmountInProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">You Pay</label>
        <span className="text-sm text-gray-400">Price: ${initialPrice}</span>
      </div>
      <div className="flex items-center gap-2 p-2 border rounded-lg">
        <input
          type="number"
          placeholder="0.0"
          className="flex-1 bg-transparent outline-none"
        />
        <button className="px-2 py-1 text-sm bg-white/5 rounded hover:bg-white/10">
          AOG
        </button>
      </div>
    </div>
  );
}