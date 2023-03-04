/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1A2B52",
        cta: "#007AFF",
        grey: "#C5C5C5",
        search: "rgb(26 27 27/.5)",
        sidebarhover: "rgb(255 255 255/.24)",
      },
    },
  },
  plugins: [],
};
