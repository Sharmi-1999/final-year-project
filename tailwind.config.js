const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    backgroundColor: (theme) => ({
      primary: "var(--color-primary)",
      secondary: "var(--color-bg-secondary)",
      white: colors.white,
      black: colors.black,
    }),
    textColor: (theme) => ({
      primary: "var(--color-heading)",
      secondary: "var(--color-secondary)",
      current: "var(--color-grey)",
      danger: "var(--color-yellow-heading)",
      default: "var(--color-purple-heading)",
      white: colors.white,
      black: colors.black,
    }),
    borderColor: (theme) => ({
      primary: "var(--color-border-primary)",
      secondary: "var(--color-border-secondary)",
      white: colors.white,
    }),

    extend: {
      fontFamily: {
        sans: ["HKGrotesk", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        "2xl": "1.3rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
