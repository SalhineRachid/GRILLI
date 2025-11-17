/** @type {import('tailwindcss').Config} */

import { animate, keyframes, transform } from 'framer-motion';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          forum: ['Forum', 'serif'],
          dmSans: ['"DM Sans"', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}
