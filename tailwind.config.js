/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garanta que as extensões estão corretas
  ],
  theme: {
    extend: {
      fontFamily: {
        sten: ['Stencilia-Bold'],
        helv: ['HelveticaNeue'],
        logo: ['Circles_New'],
      },
    },
  },
  plugins: [],
});