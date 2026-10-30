/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        background: 'var(--canvas)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
