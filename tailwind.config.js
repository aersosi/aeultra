module.exports = {
    mode: "jit",
    purge: {
        mode: "all",
        content: ["./**/*.html"],
        options: {
            whitelist: [],
        },
    },
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {},
        },
    },
    variants: {},
    // plugins: [require("@tailwindcss/typography")],
};
