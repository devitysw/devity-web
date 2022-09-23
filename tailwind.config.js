/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '720px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                darkPurple: 'hsl(258, 76%, 13%)',
                lightPurple: 'hsl(272, 98%, 38%)',
                smokeDarkBlue: 'hsl(226, 39%, 31%)'
            }
        },
    },
    plugins: [],
}