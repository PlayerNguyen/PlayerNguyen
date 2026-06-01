import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#101010",
        "canvas-soft": "#1a1a1a",
        hairline: "#3d3a39",
        "hairline-soft": "#b8b3b0",
        ink: "#f2f2f2",
        "ink-strong": "#ffffff",
        body: "#bdbdbd",
        mute: "#8b949e",
        primary: "#00d992",
        "primary-soft": "#2fd6a1",
        "primary-deep": "#10b981",
        "canvas-text-soft": "#f5f6f7",
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"SF Mono"', "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', "Courier New", "monospace"],
      },
      fontSize: {
        "display-xl": ["60px", { lineHeight: "60px", fontWeight: "400", letterSpacing: "-0.65px" }],
        "display-lg": ["36px", { lineHeight: "40px", fontWeight: "400", letterSpacing: "-0.9px" }],
        "display-md": ["24px", { lineHeight: "32px", fontWeight: "700", letterSpacing: "-0.6px" }],
        "display-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "eyebrow-mono": ["14px", { lineHeight: "20px", fontWeight: "600", letterSpacing: "2.52px" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "button-md": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        code: ["13px", { lineHeight: "18px", fontWeight: "400" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        pill: "9999px",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 15px rgba(92, 88, 85, 0.2)",
        modal: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(148,163,184,0.1) inset",
      },
      spacing: {
        gutter: "32px",
        "section-y": "48px",
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
