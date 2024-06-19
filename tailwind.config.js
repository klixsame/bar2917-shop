/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors');
const {nextui} = require("@nextui-org/react");

const colors = {
  transparent: twColors.transparent,
  black: twColors.black,
  red: twColors.red,
  green: twColors.green,
  blue: twColors.blue,
  yellow: twColors.yellow,
  purple: twColors.purple,
  orange: twColors.orange,
  white: twColors.white,
  mainprimary: '#FF8A00',
  background: '#101010',
  'background-card': '#1C1C1C',
  'card-border': '#292929',
  'background-button-card': '#ff8a00',
  'background-input': '#1E1F27',
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    extend: {
      keyframes: {
        animationOpacity: {
          from: { opacity: 0.2 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%': { opacity: 0, transform:'scale(0.9)' },
          '50%': { opacity: 0.3 },
          '100%': { opacity: 1, transform:'scale(1)' },
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
  presets: [require("@premieroctet/next-admin/dist/preset")]
}

