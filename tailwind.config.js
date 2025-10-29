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
      keyframes:{
        zoomIn: {
          '0%' : {transform: 'scale(1)'},
          '100%': {transform : 'scale(2)'}
        }
      },
      animation: {
        zoomIn: 'zoomIn 10s ease-in-out forwards',
      }
     
    },
    
  },
  plugins: [],
}
