/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '@360': {'max': '360px'}
    },
    extend: {},
  },
  plugins: [],
}

