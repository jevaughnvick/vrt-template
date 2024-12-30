/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lgr: "1050px",
      slg: "1250px",
      xl: "1440px"
    },
    extend: {},
  },
  plugins: [],
}

