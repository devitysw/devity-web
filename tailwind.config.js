/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    darkMode: 'class',
    theme: {
        screens: {
            xxs: '340px',
            xs: '410px',
            sm: '480px',
            s: '590px',
            md: '720px',
            m: '840px',
            lg: '976px',
            l: '1200px',
            xl: '1440px'
        },
        extend: {
            colors: {
                darkPurple: 'hsl(258, 76%, 10%)',
                lightPurple: 'hsl(272, 98%, 38%)',
                smokeDarkBlue: 'hsl(226, 39%, 31%)',
                pink: 'hsl(302, 42%, 55%)',
                raspberry: 'hsl(338, 100%, 54%)'
            }
        },
    },
    plugins: [],
}