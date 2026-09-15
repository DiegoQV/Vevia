import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        veviva: {
          bordeaux: "#4A0E17",
          wine: "#6B1426",
          sand: "#e8e2d9",
          cream: "#F9F6F0",
          charcoal: "#0b0c0e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
