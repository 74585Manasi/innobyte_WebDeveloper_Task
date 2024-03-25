module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: { 50: "#f8f8f8", "900_5f": "#0d0f255f", "900_01": "#0b132a", "300_03": "#dddddd" },
        blue_gray: { 50: "#eeeff2", 200: "#afb5c0", 700: "#4f5665", "700_01": "#4e5664" },
        red: { 50: "#ffebeb", 500: "#f53737", A200: "#f53855", "500_59": "#f5373759" },
        gray_300_04: "#dde0e4",
      },
      boxShadow: { xs: "0px 14px  44px 0px #0e132214", sm: "0px 13px  18px 0px #10122314" },
      fontFamily: { rubik: "Rubik" },
      backgroundImage: { gradient: "linear-gradient(180deg, #f8f8f8,#f8f8f800)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
