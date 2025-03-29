/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'light-bg': 'var(--color-light-bg)',
        'dark-bg': 'var(--color-dark-bg)',
      },
    },
  },
  plugins: [],
} 