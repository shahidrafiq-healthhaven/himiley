import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,tsx,mdx}",
    "./src/components/**/*.{js,ts,tsx,mdx}",
    "./src/app/**/*.{js,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#e11d48",
        "miley-burgundy": "#9D174D",
        "miley-pink": "#FF2F92",
        "miley-blush": "#FCE8EB",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        "underline-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "underline-grow": "underline-grow 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
