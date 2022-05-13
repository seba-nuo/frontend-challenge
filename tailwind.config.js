module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      subscribe: ['Lato', 'Nunito', 'sans-serif']
    },
    colors: {
      orange: "#F8475F",
      white: "#FFFFFF",
      black: "#000000",
      ligthGray: "#C0C0C0",
      black: "#000000",
      darkGray: "#7A7A7A"
    },
    extend: {
      backgroundImage: {
        'hero': "url('../../Assets/img/hero.webp')"
      }
    },
  },
  plugins: [],
}
