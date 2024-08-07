/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-all-sides': '0 0 8px rgba(0, 0, 0, 0.25)',
        'custom-all-blue': '0 0 6px rgba(0, 0, 255, 0.25)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      translate: {
        '0.25': '0.03125rem',
      },
    },
  },
  plugins: [],
}

