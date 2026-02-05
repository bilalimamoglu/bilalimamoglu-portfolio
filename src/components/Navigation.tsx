"use client";

import { useState, useEffect } from "react";
import { siteData } from "@/data/siteData";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const navLinks = [
  { href: "#expertise", label: "Work" },
  { href: "#philosophy", label: "Thinking" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-primary/90 backdrop-blur-xl border-b border-border flex items-center justify-between px-6 md:px-12 lg:px-20 z-50">
      <a href="#" className="font-serif text-lg text-text-primary">
        {siteData.name}
      </a>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`text-sm transition-colors ${
              activeSection === link.href.slice(1)
                ? "text-text-primary"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-slow" />
          {siteData.location}
        </div>
        <div className="flex gap-4">
          <a
            href={siteData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={siteData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </nav>
  );
}
