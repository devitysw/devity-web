/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        screens: {
            xxs: "340px",
            xs: "410px",
            sm: "480px",
            s: "590px",
            md: "720px",
            m: "820px",
            lg: "976px",
            l: "1200px",
            xl: "1440px",
        },
        extend: {
            colors: {
                dark: "#0A0A0A",
                light: "#F2F2F2",
                lime: "#D8F52C",
                purple: "#CBB0EF",
            },
            animation: {
                marquee: 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-300%)' },
                },
            },
        },
    },
    plugins: [],
};
