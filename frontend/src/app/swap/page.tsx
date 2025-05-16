'use client';

import Image from 'next/image';

import { SwapToken } from '@/components/custom-ui/swap-token';
import { SwapAnimation } from '@/components/custom-ui/swap-animation';
import { usePools } from '@/hooks/use-pools';
import { logo } from '@/assets';

export default function SwapPage() {
  const { pools, loading } = usePools();

  // console.log("Pools in SwapToken:", pools);

  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[calc(100vh-150px)] gap-20">
          <div className="relative flex-1 max-w-2xl">
            <SwapAnimation />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image src={logo} alt="logo" className="w-32 h-32" />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            {loading ? (
              <div className="w-full max-w-md space-y-4">
                <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
                <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
                <div className="h-12 bg-white/5 rounded-lg animate-pulse" />
              </div>
            ) : (
              <SwapToken pools={pools} />
            )}
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </section>
  );
}
