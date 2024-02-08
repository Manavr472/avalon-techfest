/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'SquadaOne': ['Squada One', 'cursive'],
        'Anton': ['Anton', 'sans-serif'],
        'Impact':['Impact', 'Anton'],
        'Comfortaa':['Comfortaa'],
        'Titillium':['Titillium Web'],
        'Rozha':['Rozha One'],
      },

    },
  },
  plugins: [],
}

