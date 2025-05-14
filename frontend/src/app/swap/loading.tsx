export default function SwapLoading() {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[calc(100vh-150px)] gap-20">
          <div className="relative flex-1 max-w-2xl flex flex-col items-start justify-center gap-6">
            <div className="w-full h-[400px] bg-white/5 rounded-2xl animate-pulse" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-md space-y-4">
              <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
              <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
              <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </section>
  );
} 