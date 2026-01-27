/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        swiss: {
          white: '#FFFFFF',
          black: '#000000',
          accent: '#FF3000',
          muted: '#F2F2F2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['9rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['7rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-md': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-sm': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
