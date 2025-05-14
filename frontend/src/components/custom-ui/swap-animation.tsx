'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import { swap } from "@/assets";

export function SwapAnimation() {
  return (
    <div className="relative flex-1 max-w-2xl flex flex-col items-start justify-center gap-6">
      <Lottie animationData={swap} loop={true} className="w-full h-full stroke-primary" />
    </div>
  );
} 