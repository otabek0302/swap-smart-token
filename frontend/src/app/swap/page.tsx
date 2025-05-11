'use client';

import Lottie from 'lottie-react';
import Image from 'next/image';

import { SwapToken } from '@/components/custom-ui/swap-token';
import { swap, logo } from '@/assets';

export default function SwapPage() {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[calc(100vh-150px)] gap-20">
          <div className="relative flex-1 max-w-2xl flex flex-col items-start justify-center gap-6">
              <Lottie animationData={swap} loop={true} className="w-full h-full stroke-primary" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
                <Image src={logo} alt="logo" className="w-32 h-32" />
              </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <SwapToken />
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </section>
  );
}
