/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navlinks: "#1941ba",
        navlinkshover: "#04125c",
      },
    },
  },
  plugins: [],
}

