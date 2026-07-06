import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        surface: "#141414",
        // Use a subtle neutral for borders so the UI looks cleaner and more modern
        border: "#1F1F1F",
        orange: {
          DEFAULT: "#FF6A00",
          light: "#FF6A00",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
