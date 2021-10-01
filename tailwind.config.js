const { colors } = require('./config/tailwind.colors');


module.exports = {
    mode: 'jit',
    purge: {
        mode: 'all',
        preserveHtmlElements: false,
        content: [
            './src/**/*.html',
            './src/**/*.scss',
            './src/**/*.md'
        ]
    },
    darkMode: false,
    theme: {
        screens: {
            sm: '600px',
            md: '1024px',
            lg: '1440px',
            xl: '1920px',
        },
        colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
