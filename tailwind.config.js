/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'IBM': '"IBM Plex Sans", sans-serif',
      },
    },
    colors: {
      transparent: 'transparent',
      bgPrimary: '#FFF6F5',
      red: '#F33823',
      black: '#000000',
      white: '#FBFBFB',
      gray: '#D4D8DD',
    },
  },
  plugins: [],
}

