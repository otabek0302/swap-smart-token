export default function Loading() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <div className="blue_gradient" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Animated logo spinner */}
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-primary border-opacity-60" />
          <div className="absolute">
            <span className="block w-16 h-16 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
        {/* Animated text shimmer */}
        <div className="w-64 h-8 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-lg animate-pulse mb-2" />
        <p className="text-lg text-primary font-semibold tracking-wide animate-pulse">
          Loading MiniSwap...
        </p>
      </div>
    </section>
  );
}