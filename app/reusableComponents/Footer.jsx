"use client";
import React, { useEffect, useState } from 'react';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function ShootingStarsAndStarsBackgroundDemo() {
  const [clientOnlyData, setClientOnlyData] = useState(null);
  useEffect(() => {
    // Client-side only code
    setClientOnlyData('This is client-only data');
  }, []);
  return (
    (<div
      className="h-[40rem]  bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2
        className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span>Exotic</span>
        <span className="text-white text-lg font-thin">x</span>
        <span>Celebrations</span>
      </h2>
        <p className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-10">exoticcelebrations © 2019 </p>
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}
