/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f6f3ff',
          100: '#eee9fe',
          200: '#e0d5ff',
          300: '#c7b4fe',
          400: '#ad89fc',
          500: '#945af8',
          600: '#8637f0',
          700: '#7826dc',
          800: '#631fb8',
          900: '#541b97',
          950: '#330f66',
          0: '#7826dc',
        },
        secondary: {
          50: '#fff9ed',
          100: '#fff2d5',
          200: '#fde0ab',
          300: '#fbc976',
          400: '#f9a73e',
          500: '#f68b19',
          600: '#ee740f',
          700: '#c0560e',
          800: '#984414',
          900: '#7b3913',
          950: '#421a08',
          0: '#ee740f',
        },
        tertiary: {
          50: '#e7f9ee',
          100: '#c4f1d2',
          200: '#9ee8b4',
          300: '#71db92',
          400: '#4bce75',
          500: '#24AF61',
          600: '#209b56',
          700: '#1b8347',
          800: '#166b39',
          900: '#12562e',
          950: '#0c321c',
          0: '#24AF61',
        },
        woodsmoke: {
          50: '#ffffff',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1e1e1e',
          950: '#161616',
          0: "#161616"
        },
        status: {
          danger: {
            DEFAULT: '#f44336',
            light: '#ffebee',
          },
          success: {
            DEFAULT: '#4caf50',
            light: '#e8f5e9',
          },
        },
      },
    },
  },
  plugins: [],
}