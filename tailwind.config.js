module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"poppins"', 'normal']
      },
      backgroundImage: {
        'colorful': "url('/src/images/colorful.png')",
      },
      colors: {
        'custom-dark-blue': "#161616",
        'custom-dark-black': "#222222",
        'custom-light-pink': "#e75984",
        'custom-light-blue': "#9bd5df",
        'custom-light-gray': "#828282",
        'custom-light-purple': "#9f88c7",
        'custom-light-orange': "#f08d72",
        'custom-light-white': "#EEEEEE",
        'custom-dark-gray': "#1f222e",
        'custom-dark-gray-2': "#32364a",
        'custom-gradient-start': "#EA5C54", //135deg linear gradient
        'custom-gradient-end': "#bb6dec", //135deg linear gradient
        'custom-sidebar-gray': "#2d3748",
        'custom-mobilenav-purple': "#5607d7",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'dark'],
      blur: ['hover', 'focus'],
      rotate: ['active', 'group-hover'],
      display: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
