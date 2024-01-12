/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Body' : 'url("./assets/images/bg.jpg")'
      },
      screens:{
        x_sm : '375px'
      }
    },
  },
  plugins: [],
}

