module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      subscribe: ['Lato', 'Nunito', 'sans-serif'],
      buyBtn: ['Ubuntu', 'Nunito', 'sans-serif']
    },
    colors: {
      orange: "#F8475F",
      white: "#FFFFFF",
      black: "#000000",
      ligthGray: "#C0C0C0",
      ligthterGray: "#F2F2F2",
      black: "#000000",
      darkGray: "#7A7A7A",
      green: "#76ff03"
    },
    extend: {
      backgroundImage: {
        'hero': "url('../../Assets/img/hero.webp')"
      }
    },
  },
  plugins: [],
}
