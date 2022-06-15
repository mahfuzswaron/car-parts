module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        CarPartsTheme: {

          "primary": "#EEB644",

          "secondary": "#D9D9D9",

          "accent": "#07c417",

          "neutral": "#1B1B1C",

          "base-100": "#F6F6F6",

          "info": "#728ADA",

          "success": "#23E792",

          "warning": "#F7C655",

          "error": "#EC5569",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
