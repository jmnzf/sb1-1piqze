/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'volkswagen': ['"Volkswagen-Serial-Black"', 'sans-serif'],
      },
      lineClamp: {
        2: '2'
      }
    },
  },
  plugins: [],
};