import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        "bounce-zoom": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(.93)", opacity: "0.6" },
        },
        "slide-in-up": {
          "0%": { transform: "translateY(15px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "translateY(0)" },
          "25%": { transform: "translateY(-3px)" },
          "50%": { opacity: "0.6", transform: "translateY(0)" },
          "75%": { transform: "translateY(3px)" },
        },
      },
      animation: {
        wiggle: "wiggle 4s linear infinite",
        "bounce-zoom": "bounce-zoom 4s linear infinite",
        "slide-in-up": "slide-in-up 1s ease-in",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        pulse: "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
