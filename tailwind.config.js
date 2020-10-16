module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.vue", "./public/**/*.jsx"],

  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro"],
        mitr: ["Mitr"],
        "roboto-slab": ["Roboto Slab"],
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],

  variants: {},
};

