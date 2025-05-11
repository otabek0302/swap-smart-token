export function AmountIn() {
  return (
    <div className="flex flex-col gap-1">
        <label htmlFor="amount-in" className="text-sm font-medium text-gray-400">Amount In</label>
        <input type="text" id="amount-in" className="w-full p-2 rounded-lg border border-gray-100" />
    </div>
  );
}