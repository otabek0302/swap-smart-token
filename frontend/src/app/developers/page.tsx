export default function DevelopersPage() {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between min-h-[calc(100vh-150px)] gap-12 py-12">
          <div className="flex-1 max-w-xl">
            <h1 className="text-6xl font-bold mb-6">
              Developer <span className="text-primary">Portal</span>
            </h1>
            <h4 className="text-lg font-normal">Welcome to our developer portal! Here you&apos;ll find everything you need to integrate with our DEX platform, including API documentation, smart contract interfaces, and development tools to build on top of our infrastructure.</h4>
          </div>

          <div className="flex-1 max-w-3xl grid grid-cols-2 gap-6 relative">
            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border gradient-border shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-4 text-white">Code Explorer</h2>
              <p className="text-gray-200 mb-6">Dive into our treasure trove of smart contracts, SDKs, and example implementations. Your journey to building the next big DeFi app starts here!</p>
              <div className="flex flex-col gap-3">
                <a href="https://docs.soliditylang.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg transition-colors duration-300">
                  Solidity Docs
                </a>
                <a href="https://ethereum.org/developers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg transition-colors duration-300">
                  Ethereum Developer Portal
                </a>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border gradient-border shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-4 text-white">Playground</h2>
              <p className="text-gray-200 mb-6">Experiment with our APIs in a risk-free environment. Get your hands dirty with test tokens and watch your ideas come to life!</p>
              <div className="flex flex-col gap-3">
                <a href="https://remix.ethereum.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg transition-colors duration-300">
                  Remix IDE
                </a>
                <a href="https://sepoliafaucet.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg transition-colors duration-300">
                  Sepolia Faucet
                </a>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border gradient-border shadow-xl transform hover:scale-105 transition-transform duration-300 col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-white">Launch Pad</h2>
              <p className="text-gray-200 mb-6">Ready to make waves in the DeFi space? Deploy your masterpiece to Sepolia with our battle-tested tools and real-time monitoring suite.</p>
              <div className="flex gap-4">
                <a href="https://hardhat.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg transition-colors duration-300">
                  Hardhat
                </a>
                <a href="https://trufflesuite.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg transition-colors duration-300">
                  Truffle Suite
                </a>
                <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg transition-colors duration-300">
                  Etherscan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </section>
  );
}
