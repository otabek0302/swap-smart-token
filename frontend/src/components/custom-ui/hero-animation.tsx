'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import { hero } from "@/assets";

export function HeroAnimation() {
  return (
    <div className="flex items-center justify-center">
      <Lottie animationData={hero} loop={true} className="w-full h-full" />
    </div>
  );
}
