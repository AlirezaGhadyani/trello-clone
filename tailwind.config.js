module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bgPrimary: "#dfe4ea",
      bgSecoundary: "#ffffff",
      bgTertiary: "#ced6e0",
      bgQuaternary: "#2b60e5",
      bgQuinary: "#2f3542",
      textPrimary: "#2f3542",
      textSecoundary: "#2b60e5",
      textTertiary: "#ced6e0",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Russo One", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
