/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        primarydark: '#e86f00',
        lightOrange: '#f1dabf',
        darkGray: '#1a1f25',
        lightGray: '#272c35',

      },
      container : {
        center : true,
        padding : {
          DEFAULT : '1rem',
          sm : '2rem',
          lg : '4rem',
          xl : '5rem',
          '2xl' : '6rem',

        }
      }
    },
  },
  plugins: [],
}

