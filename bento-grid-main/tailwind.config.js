/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bento-purple-100': 'hsl(254, 88%, 90%)',
        'bento-purple-500': 'hsl(256, 67%, 59%)',
        'bento-yellow-100': 'hsl(31, 66%, 93%)',
        'bento-yellow-500': 'hsl(39, 100%, 71%)',
        'bento-black': 'hsl(0, 0%, 7%)',
      },
    },
  },
  plugins: [],
};
