export default function FeaturesPage() {
  return (
    <section className="relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="py-10 py-0 flex flex-col xl:flex-row items-center justify-between h-full lg:h-[calc(100vh-150px)] gap-10 md:gap-20">
          <div className="flex-1 max-w-xl flex flex-col items-center xl:items-start justify-center text-center xl:text-left">
            <h1 className="text-6xl font-bold mb-6">
              Platform <span className="text-primary">Features</span>
            </h1>
            <h4 className="text-lg font-normal">
              Discover the power of our decentralized exchange platform. Built with cutting-edge technology to provide you with the most efficient and secure trading experience.
            </h4>
          </div>

          <div className="flex-1 max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            <div className="feature-gradient-border">
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl h-full">
                <h2 className="text-xl font-bold mb-3 text-black dark:text-white">Lightning Fast</h2>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Experience near-instant token swaps with our optimized smart contracts.
                </p>
              </div>
            </div>

            <div className="feature-gradient-border">
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl h-full">
                <h2 className="text-xl font-bold mb-3 text-black dark:text-white">Secure by Design</h2>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Built with security-first principles and thoroughly audited smart contracts.
                </p>
              </div>
            </div>

            <div className="feature-gradient-border">
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl h-full">
                <h2 className="text-xl font-bold mb-3 text-black dark:text-white">Real-Time Updates</h2>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Live price feeds and instant market data for informed trading decisions.
                </p>
              </div>
            </div>

            <div className="feature-gradient-border">
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl h-full">
                <h2 className="text-xl font-bold mb-3 text-black dark:text-white">Low Fees</h2>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Optimized gas usage and competitive trading fees for maximum value.
                </p>
              </div>
            </div>

            <div className="feature-gradient-border">
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl h-full">
                <h2 className="text-xl font-bold mb-3 text-black dark:text-white">User-Friendly</h2>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Intuitive interface designed for both beginners and experienced traders.
                </p>
              </div>
            </div>

            <div className="feature-gradient-border">
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl h-full">
                <h2 className="text-xl font-bold mb-3 text-black dark:text-white">24/7 Support</h2>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Round-the-clock assistance and comprehensive documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </section>
  );
}
