/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
     'play': '#012A79',
     'steam': '#081937'
    }},
  },
  plugins: [],
}

