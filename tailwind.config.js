/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "450px",
      },
      colors: {
        scissors1: "hsl(39, 89%, 49%)",
        scissors2: "hsl(40, 84%, 53%)",
        paper1: " hsl(230, 89%, 62%) ",
        paper2: "hsl(230, 89%, 65%)",
        rock1: " hsl(349, 71%, 52%) ",
        rock2: " hsl(349, 70%, 56%)",
        lizard1: " hsl(261, 73%, 60%) ",
        lizard2: "hsl(261, 72%, 63%)",
        spock1: "hsl(189, 59%, 53%)",
        spock2: " hsl(189, 58%, 57%)",

        //  Neutral

        darkText: " hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 25%)",

        //  Background

        radial1: "hsl(214, 47%, 23%) ",
        radial2: "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
