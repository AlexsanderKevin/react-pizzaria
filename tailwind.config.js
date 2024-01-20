/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['poppins']
    },
    extend: {
      backgroundImage: {
        'point-tag': "url('/src/assets/img/point-tag.png')",
        'promo-pizza': "url('/src/assets/img/promo-pizza.png')",
        'build-pizza': "url('/src/assets/img/build-pizza.png')"
      }
    },
  },
  plugins: [],
}

