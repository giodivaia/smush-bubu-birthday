/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#0a0a0a',
        'ink': '#1a1a1a',
        'gold': '#fbbf24',
      },
    },
  },
  plugins: [],
}
