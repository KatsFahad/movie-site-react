/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '@1114': {'max': '1114px'},
      '@820': {'max': '820px'},
      '@768': {'max': '768px'},
      '@428': {'max': '428px'},
      '@414': {'max': '414px'},
      '@393': {'max': '393px'},
      '@375': {'max': '375px'},
      '@360': {'max': '360px'},
      '@320': {'max': '320px'},
    },
    extend: {},
  },
  plugins: [],
}

