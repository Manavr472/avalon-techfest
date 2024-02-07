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
      },

    },
  },
  plugins: [],
}

