import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'white': "#FFFFFF",
        'lightBlue': '#2967cc',
        'plainBlue': '#cce0ff',
        'letterBlue':'#1976d2'
      },
      screens: {
        'mP': '0px',
        'sp': '640px',
        'tb': '768px',
        'tl': '1024px',
        
      },
    },
  },
  plugins: [],
};
export default config;
