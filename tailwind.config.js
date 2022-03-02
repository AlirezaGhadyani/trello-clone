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
      white: "#fff",
      white100: "rgba(255,255,255,0.1)",
      white200: "rgba(255,255,255,0.2)",
      white300: "rgba(255,255,255,0.3)",
      white400: "rgba(255,255,255,0.4)",
      white500: "rgba(255,255,255,0.5)",
      white600: "rgba(255,255,255,0.6)",
      white700: "rgba(255,255,255,0.7)",
      white800: "rgba(255,255,255,0.8)",
      white900: "rgba(255,255,255,0.9)",
      black: "#000",
      black100: "rgba(0,0,0,0.1)",
      black200: "rgba(0,0,0,0.2)",
      black300: "rgba(0,0,0,0.3)",
      black400: "rgba(0,0,0,0.4)",
      black500: "rgba(0,0,0,0.5)",
      black600: "rgba(0,0,0,0.6)",
      black700: "rgba(0,0,0,0.7)",
      black800: "rgba(0,0,0,0.8)",
      black900: "rgba(0,0,0,0.9)",
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secoundary: ["Mali", "cursive"],
    },
    extend: {
      backgroundImage: {
        "auth-form-overlay": "url('/src/assets/images/auth-bg.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
