module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                xs: '475px',
            },
            colors: {
                black: '#0A0A23',
                dark: '#1b1b32',
                light: '#f5f6f7',
                gray: '#d0d0d5',
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus'],
            borderStyle: ['hover', 'focus'],
        },
    },
    plugins: [],
};
