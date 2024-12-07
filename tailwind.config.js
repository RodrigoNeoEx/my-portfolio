import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sten: ["Stencilia-Bold"],
        helv: ["HelveticaNeue"],
        logo: ["Circles_New"],
      },
      fontSize: {
        '10xl': '35rem',
      },
    },
  },
  plugins: [],
});
