import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1440px" } },
    extend: {
      colors: {
        ink: { DEFAULT: "#0A0C0F", 2: "#111519", 3: "#1A1F26" },
        cream: { DEFAULT: "#F2EFE7", 2: "#E7E2D6", 3: "#D8D2C3" },
        gold: { DEFAULT: "#C89B5A", soft: "#DCB77E", deep: "#9A7038" },
        mist: "#8C949F",
        slate: "#4A525C",
      },
      fontFamily: {
        display: ["Inter Tight", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      letterSpacing: { tightest: "-0.05em", tighter2: "-0.035em", label: "0.24em" },
      borderRadius: { xl2: "1.5rem", xl3: "2.25rem", xl4: "3rem" },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
        panel: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "pulse-soft": {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "45%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "scroll-hint": "scroll-hint 2.2s cubic-bezier(0.16,1,0.3,1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
