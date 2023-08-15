/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#c70049",
        color1_light1: "rgba(227,25,99)",
        color1_light2: "rgba(199,0,73,0.8)",
        color2: "white",
        color3: "rgba(45,45,45)",
        color4: "transparent",
        color5: "#f2f2f2",
        color6: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
