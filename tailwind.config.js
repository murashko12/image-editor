/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "firstBackgroundColor": '#0D1117',
        "secondBackgroundColor": '#161C22'
      }
    },
  },
  plugins: [],
}

