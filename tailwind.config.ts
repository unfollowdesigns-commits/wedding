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
        "vow-bg": "#F5F0E8",
        "vow-dark": "#251E16",
        "vow-gold": "#C9A96E",
        "vow-secondary": "#7A6E62",
        "vow-card": "#EDE6D9",
        "vow-stone": "#B5A898",
        "vow-terra": "#C0714E",
        "vow-olive": "#7A8A6A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
