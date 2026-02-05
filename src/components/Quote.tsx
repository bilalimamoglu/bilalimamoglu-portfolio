"use client";

import { siteData } from "@/data/siteData";

export default function Quote() {
  return (
    <div className="py-28 px-6 md:px-12 lg:px-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="quote-orb-1 absolute rounded-full animate-breathe" />
        <div className="quote-orb-2 absolute rounded-full animate-breathe-reverse" />
      </div>

      <p className="font-serif text-[clamp(22px,3vw,28px)] italic text-text-secondary text-center max-w-[800px] relative z-10">
        &ldquo;{siteData.quote}&rdquo;
      </p>
    </div>
  );
}
