/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(.93)", opacity: 0.6 },
        },
        slideInUp: {
          "0%": { transform: "translate(0, 15px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        idlePulse: {
          "0%, 100%": { opacity: 1, transform: "translate(0, 0)" },
          "50%": { opacity: 0.6, transform: "translate(0, 0)" },

          "25%": {
            transform: "translate(0, -3px)",
          },
          "75%": {
            transform: "translate(0, 3px)",
          },
        },
        fadeInUp: {
          "0%": { transform: "translate(0, 14px)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
      },
      animation: {
        wiggle: "wiggle 4s linear infinite",
        "bounce-zoom": "bounce 4s linear infinite",
        dance: "wiggle 10s, bounce 5s linear infinite",
        "slide-up-then-idle":
          "slideInUp 1s ease-in, idlePulse 2s linear infinite",
        // fadeInUp: "fadeInUp 2s",
      },
    },
  },
  plugins: [],
};
