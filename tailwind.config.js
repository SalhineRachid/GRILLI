/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        forum: ['Forum', 'cursive'], // 👈 add this line
      },
    },
  },
  plugins: [],
}
