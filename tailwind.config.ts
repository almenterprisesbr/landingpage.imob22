import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: {
        ink: { DEFAULT: "#070B12", 2: "#0C1220", 3: "#131B2B" },
        gold: { DEFAULT: "#E3A857", soft: "#F0BE7B", deep: "#B8802F" },
        sand: { DEFAULT: "#EDE6DA", dim: "#B9B2A6" },
        sky: { DEFAULT: "#7FA8C9", deep: "#3E5A75" },
        mist: "#9AA3B2",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      letterSpacing: { tightest: "-0.055em", label: "0.28em" },
      borderRadius: { xl2: "1.75rem", xl3: "2.5rem" },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite",
        marquee: "marquee 42s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
