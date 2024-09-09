/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        Hulk1: "#253324",
        Hulk2: "#9bc063",
        Hulk3: "#70964b",
        Hulk4: "#5a4862",
        Hulk5: "#455d3b",
        IronMan1: "#4b0908",
        IronMan2: "#6a0c0b",
        IronMan3: "#aa0505",
        IronMan4: "#fbca03",
        IronMan5: "#b97d10",
        dark: "#0d1117",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },

  plugins: [],
};
