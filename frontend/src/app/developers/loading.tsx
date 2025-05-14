export default function DevelopersLoading() {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between min-h-[calc(100vh-150px)] gap-12 py-12">
          {/* Left side - Title and description */}
          <div className="flex-1 max-w-xl">
            <div className="h-16 bg-white/5 rounded-lg animate-pulse mb-6" />
            <div className="space-y-3">
              <div className="h-4 bg-white/5 rounded-lg animate-pulse w-3/4" />
              <div className="h-4 bg-white/5 rounded-lg animate-pulse w-full" />
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="flex-1 max-w-4xl grid grid-cols-3 gap-6 relative">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="feature-gradient-border" key={i}>
                <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl h-full">
                  <div className="h-6 bg-white/5 rounded-lg animate-pulse mb-3 w-2/3" />
                  <div className="h-4 bg-white/5 rounded-lg animate-pulse w-full" />
                  <div className="h-4 bg-white/5 rounded-lg animate-pulse w-3/4 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </section>
  );
} 