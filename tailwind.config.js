/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        microsoft: {
          blue: "#0078D4",
          sky: "#00A2ED",
          emerald: "#107C10",
          amber: "#FFB900",
          red: "#D83B01",
        },
      },
    },
  },
  plugins: [],
};
