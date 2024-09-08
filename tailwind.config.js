/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        satoshi: ["Satoshi","sans-erif"],
        inter: ["Inter","sans-serif"],
      }
    },
  },
  plugins: [],
}