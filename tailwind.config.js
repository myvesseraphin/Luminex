export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#E55A2B',
          light: '#FF8555',
        },
        secondary: {
          DEFAULT: '#F7931E',
          dark: '#DD7F0A',
          light: '#FFA63E',
        },
        solar: {
          DEFAULT: '#FDB833',
          dark: '#E9A41F',
          light: '#FDC653',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}