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
