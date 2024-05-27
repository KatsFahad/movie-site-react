/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '@884': {'max': '884px'},
      '@834': {'max': '834px'},
      '@428': {'max': '428px'},
      '@412': {'max': '412px'},
      '@320': {'max': '320px'},
    },
    extend: {},
  },
  plugins: [],
}

