/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '@412': {'max': '412px'},
      '@320': {'max': '320px'}
    },
    extend: {},
  },
  plugins: [],
}

