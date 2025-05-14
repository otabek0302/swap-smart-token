import Image from 'next/image';
import { Suspense } from 'react';
import { SwapToken } from '@/components/custom-ui/swap-token';
import { SwapAnimation } from '@/components/custom-ui/swap-animation';
import { logo } from '@/assets';

// Simulate fetching token data
async function getTokenData() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    aogPrice: 1.25,
    aosPrice: 0.85,
    lastUpdated: new Date().toISOString(),
  };
}

export default async function SwapPage() {
  // This will trigger the loading state
  const tokenData = await getTokenData();

  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[calc(100vh-150px)] gap-20">
          <SwapAnimation />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src={logo} alt="logo" className="w-32 h-32" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <Suspense
              fallback={
                <div className="w-full max-w-md space-y-4">
                  <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
                  <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
                  <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
                </div>
              }>
              <SwapToken initialData={tokenData} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </section>
  );
}
