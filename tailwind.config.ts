import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        xxs: '340px',
        xs: '410px',
        sm: '480px',
        s: '590px',
        md: '720px',
        m: '850px',
        lg: '976px',
        l: '1200px',
        xl: '1440px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#0A0A0A",
        light: "#F2F2F2",
        lime: "#D8F52C",
        purple: "#CBB0EF",
      },
    },
  },
  plugins: [],
};
export default config;
