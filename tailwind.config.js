/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NAVY: "#001f3f",
        NAVY_T: "#80BFFF",
        BLUE: "#0074D9",
        BLUE_T: "#B3DBFF",
        AQUA: "#7FDBFF",
        AQUA_T: "#004966",
        TEAL: "#39CCCC",
        TEAL_T: "#000000",
        MAROON: "#85144b",
        MAROON_T: "#EB7AB1",
        ORANGE: "#FF751B",
        ORANGE_T: "#663000",
        OLIVE: "#3D9970",
        OLIVE_T: "#163728",
        TANL: "#FCF5EB",
        TAND: "#D8D3C7",
      },
    },
  },
  plugins: [],
};
