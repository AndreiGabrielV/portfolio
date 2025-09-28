/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#0a0a0a",
        },
      },

      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
