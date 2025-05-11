export function AmountOut() {
  return (
    <div className="flex flex-col gap-1">
        <label htmlFor="amount-out" className="text-sm font-medium text-gray-400">Amount Out</label>
        <input type="text" id="amount-out" className="w-full p-2 rounded-lg border border-gray-300" />
    </div>
  );
}