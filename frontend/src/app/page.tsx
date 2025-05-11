import { HeroAnimation } from "@/components/custom-ui/hero-animation";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[calc(100vh-150px)]">
          <div className="flex-1 max-w-xl flex flex-col items-start justify-center gap-6">
            <h1 className="text-6xl font-bold">MiniSwap: <span className="text-primary">Custom Token</span> DEX Made Simple</h1>
            <h4 className="text-lg font-normal">Experience seamless, real-time swapping between <span className="text-primary font-bold">AOG</span> and <span className="text-primary font-bold">AOS</span> tokens using our minimalistic DEX — no middlemen, no limits, just fast and secure smart contract execution on the Ethereum Sepolia network.</h4>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <HeroAnimation  />
          </div>
        </div>
      </div>
    </section>
  );
}
