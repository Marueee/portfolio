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
        canvas: "#05060f",
        steel: "#2f343e",
        fog: "#9da7ba",
        moon: "#c7d3ea",
        frost: "#d1e4fa",
        ice: "#d8ecf8",
        white: "#ffffff",
        violet: "#663af3",
        blueprint: "#b6d9fc",
        ember: "#e46d4c",
        signal: "#027dea",
        teal: "#269684",
        gridline: "#3f4959",
        glassEdge: "rgba(186,215,247,0.12)",
        luminousFill: "rgba(199,211,234,0.12)",
      },
      fontFamily: {
        display: ["aeonikPro", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        body: ["Untitled Sans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["dotDigital", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      spacing: {
        "120": "120px",
        "200": "200px",
      },
      borderRadius: {
        pill: "999px",
        card: "16px",
        badge: "6px",
        input: "6px",
      },
      boxShadow: {
        glass: "rgba(186,215,247,0.12) 0px 0px 0px 1px inset",
        glassDeep: "rgba(186,214,247,0.06) 0px 0px 0px 1px inset, rgba(0,0,0,0.3) 0px 24px 32px 0px",
        glow: "rgba(186,207,247,0.32) 0px 0px 6px 0px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
