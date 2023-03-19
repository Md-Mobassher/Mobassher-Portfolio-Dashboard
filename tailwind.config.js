module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1b9637",
          secondary: "#e81b1b",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "valentine",
    ],
  },
  plugins: [require("daisyui")],
}
