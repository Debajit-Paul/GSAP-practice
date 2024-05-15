/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      custom: ["FoundersGroteskCondensed-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        green: {
          50: "#7AD857",
        },
        blue: {
          50: "#2BB4D4",
        },
      },

      backgroundImage: {
        hero: "url('/ooptiq-hero.jpg')",
      },

      screens: {
        md: "950px",
      },
    },
  },
  plugins: [],
};
