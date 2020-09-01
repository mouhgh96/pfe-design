module.exports = {
    purge: [],

    theme: {
        extend: {
            fontFamily: {
                'source-sans-pro': ['Source Sans Pro'],
                'mitr': ['Mitr'],
                'roboto-slab': ['Roboto Slab'],
            },
        },
    },
    plugins: [require("@tailwindcss/custom-forms")],

    variants: {},
}