/* import type { Config } from 'tailwindcss'; */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#6366F1',
        'primary-dark': '#595cd9',
        'gradient-middle': '#8b5cf6',
        'gradient-end': '#d946ef',
        black: '#0B0F19',
        'off-black': '#232730',
        'gray-text': '#565973',
        'gray-nav-text': '#33354D',
        tagline: '#9397AD',
        'input-color': '#B4B7C9',
        'off-white': '#F3F6FF',
      },
      backgroundImage: (theme: any) => ({
        'gradient-primary': `linear-gradient(to right, ${theme(
          'colors.primary'
        )}, ${theme('colors.gradient-middle')}, ${theme(
          'colors.gradient-end'
        )})`,
      }),
    },
  },
  plugins: [],
};
/* export default config; */
