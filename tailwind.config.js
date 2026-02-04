/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#c8e5ff',
          primary: '#5880ff',
          dark: '#4666cc',
          sky: '#6ebeff',
          accent: '#b0dcff',
          pale: '#e4f2fd',
          lighter: '#ebf7ff',
          extra: '#c0e2ff',
          gradient: '#a5d7ff',
        }
      }
    },
  },
  plugins: [],
}
