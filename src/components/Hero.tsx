"use client";

import { useEffect, useRef } from "react";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let orbX = 0;
    let orbY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      orbX += (mouseX - orbX) * 0.1;
      orbY += (mouseY - orbY) * 0.1;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${orbX * 15}px, ${orbY * 15}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${orbX * 30}px, ${orbY * 30}px)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate(${orbX * 45}px, ${orbY * 45}px)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center relative overflow-hidden px-6 md:px-12">
      {/* Animated Orbs Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          ref={orb1Ref}
          className="orb orb-1 animate-orbit-1"
        />
        <div
          ref={orb2Ref}
          className="orb orb-2 animate-orbit-2"
        />
        <div
          ref={orb3Ref}
          className="orb orb-3 animate-orbit-3"
        />
      </div>

      {/* Content */}
      <div className="max-w-[800px] relative z-10">
        <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-[1.15] tracking-tight mb-8 opacity-0 animate-fade-up">
          Building <em className="italic text-accent">ML platforms</em> that turn
          ideas into production-grade products
        </h1>
        <p className="text-lg text-text-secondary max-w-[600px] mb-12 opacity-0 animate-fade-up-delay-1">
          {siteData.hero.description}
        </p>
        <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up-delay-2">
          {siteData.hero.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-text-muted px-4 py-2 bg-secondary/80 border border-border rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 text-text-muted text-xs font-mono uppercase tracking-widest opacity-0 animate-fade-up-delay-3 z-10">
        <span className="scroll-line w-12 h-px bg-border relative overflow-hidden" />
        Scroll to explore
      </div>
    </section>
  );
}
