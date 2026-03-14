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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#5865F2", // Discord Blurple
          hover: "#4752C4",
          light: "#7983F5",
          accent: "#FA2D48", // iOS Accent Color
        },
        royal: {
          DEFAULT: "#1A1B4B", // Deep Blue from Slices
          dark: "#0F1035",
        },
        vision: {
          maroon: "#8B3952",
          purple: "#5A3B56",
          darkRed: "#4C222C",
          brown: "#745353",
          deepPurple: "#6D5073",
        },
        dark: {
          DEFAULT: "#313338",
          darker: "#2B2D31",
          darkest: "#1E1F22",
          accent: "#232428",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #5865F2 0%, #4752C4 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
