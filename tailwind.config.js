/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"poppins"', "normal"],
      },
      colors: {
        "custom-dark-blue": "#161616",
        "custom-dark-black": "#222222",
        "custom-light-pink": "#e75984",
        "custom-light-blue": "#9bd5df",
        "custom-light-gray": "#828282",
        "custom-light-purple": "#9f88c7",
        "custom-light-orange": "#f08d72",
        "custom-light-white": "#EEEEEE",
        "custom-dark-gray": "#1f222e",
        "custom-dark-gray-2": "#32364a",
        "custom-gradient-start": "#EA5C54", //135deg linear gradient
        "custom-gradient-end": "#bb6dec", //135deg linear gradient
        "custom-sidebar-gray": "#2d3748",
        "custom-mobilenav-purple": "#5607d7",
      },
    },
  },
  plugins: [],
}
