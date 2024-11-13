/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'dark-blue-dark': 'hsl(207, 26%, 17%)',
        'dark-blue-light': 'hsl(200, 15%, 8%)',
        'light-gray': 'hsl(0, 0%, 95%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
      }
    },
  },
  plugins: [],
};
