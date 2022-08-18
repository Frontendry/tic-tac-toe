/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          150: "#ff6e7f",
        },
        blue: {
          250: "#bfe9ff",
        },
      },
    },
  },
  plugins: [],
};
