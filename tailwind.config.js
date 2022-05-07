module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontSize: {
                xxs: [
                    '0.7rem',
                    {
                        lineHeight: '1.5rem',
                    },
                ],
            },
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
