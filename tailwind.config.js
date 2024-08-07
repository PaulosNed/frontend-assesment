/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-all-sides': '0 0 8px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      translate: {
        '0.25': '0.03125rem', // 0.0625rem is equivalent to 1/16rem, which is 1px assuming 16px base font size
      },
    },
  },
  plugins: [],
}

