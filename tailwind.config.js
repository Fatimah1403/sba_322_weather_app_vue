/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#34a4eb",
        "weather-secondary": "#346eeb",
        "weather-tert": "#3273a8",
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}

