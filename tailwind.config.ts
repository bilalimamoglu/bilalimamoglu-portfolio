import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#111111",
        tertiary: "#1a1a1a",
        accent: "#d4a574",
        "accent-dim": "#b8956a",
        "accent-glow": "rgba(212, 165, 116, 0.15)",
        "text-primary": "#f5f5f4",
        "text-secondary": "#a8a8a8",
        "text-muted": "#6b6b6b",
        border: "#252525",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["DM Sans", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "orbit-1": "orbit1 6s ease-in-out infinite",
        "orbit-2": "orbit2 5s ease-in-out infinite",
        "orbit-3": "orbit3 4s ease-in-out infinite",
        "breathe": "breathe 5s ease-in-out infinite",
        "breathe-reverse": "breathe 4s ease-in-out infinite reverse",
        "scroll-line": "scrollAnim 2s infinite",
        "pulse-slow": "pulse 2s infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-up-delay-1": "fadeUp 0.8s ease 0.15s forwards",
        "fade-up-delay-2": "fadeUp 0.8s ease 0.3s forwards",
        "fade-up-delay-3": "fadeUp 0.8s ease 0.5s forwards",
      },
      keyframes: {
        orbit1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-40px, 30px) scale(1.1)" },
          "50%": { transform: "translate(-20px, 60px) scale(0.95)" },
          "75%": { transform: "translate(30px, 20px) scale(1.05)" },
        },
        orbit2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(50px, -40px) scale(1.15)" },
          "50%": { transform: "translate(30px, -20px) scale(0.9)" },
          "75%": { transform: "translate(-20px, -50px) scale(1.1)" },
        },
        orbit3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, 40px) scale(1.2)" },
          "66%": { transform: "translate(-30px, 20px) scale(0.85)" },
        },
        breathe: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0.7" },
          "50%": { transform: "translate(-50%, -50%) scale(1.15)", opacity: "1" },
        },
        scrollAnim: {
          "0%": { left: "-16px" },
          "100%": { left: "100%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
