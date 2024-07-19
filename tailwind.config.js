/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary-light': 'hsl(0, 0%,85%)',
        'primary-dark': 'hsl(0, 0%, 55%)',
        primary: 'hsl(0, 0%, 100%)',
        secondary: 'hsl(0, 0%, 0%)',
        'secondary-light': 'hsl(0, 0%, 55%)',
        accent: 'hsl(216, 72%, 82%)',
        background: {
          light: 'hsl(0, 0%, 100%)',
          dark: '',
        },
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        '.wrapper': {
          '@apply max-w-[1280px] lg:mx-auto p-5 md:px-10 xl:px-0 w-full': {},
        },
        '.h1': {
          '@apply font-poppins font-bold tracking-[-0.02em] text-[58px]': {},
        },
        '.h2': {
          '@apply font-poppins font-bold tracking-[-0.02em] text-[40px]': {},
        },
        '.h3': {
          '@apply font-poppins font-semibold tracking-[-0.02em] text-[24px]': {},
        },
        '.subtitle': {
          '@apply font-poppins font-semibold text-[20px]': {},
        },
        '.body': {
          '@apply font-poppins font-normal leading-[1.4em] text-[16px]': {},
        },
        '.bold': {
          '@apply font-poppins font-semibold text-[16px]': {},
        },
        '.small': {
          '@apply font-poppins font-light leading-[1.4em] text-[14px]': {},
        },
        '.pretitle': {
          '@apply font-poppins font-bold tracking-[0.03em] text-[12px]': {},
        },
        '.button-text': {
          '@apply font-poppins font-bold tracking-[0.04em] uppercase text-[16px]': {},
        },
        '.link-text': {
          '@apply font-poppins font-bold text-accent underline text-[16px]': {},
        },

        // mobile 
        '.h1-mobile': {
          '@apply font-poppins font-bold tracking-[-0.02em] text-[32px]': {},
        },
        '.h2-mobile': {
          '@apply font-poppins font-bold tracking-[-0.02em] text-[28px]': {},
        },
        '.h3-mobile': {
          '@apply font-poppins font-semibold tracking-[-0.02em] text-[20px]': {},
        },
        '.subtitle-mobile': {
          '@apply font-poppins font-semibold text-[18px]': {},
        },
        '.body-mobile': {
          '@apply font-poppins font-normal leading-[1.4em] text-[14px]': {},
        },
        '.bold-mobile': {
          '@apply font-poppins font-semibold text-[14px]': {},
        },
        '.small-mobile': {
          '@apply font-poppins font-light leading-[1.4em] text-[12px]': {},
        },
        '.pretitle-mobile': {
          '@apply font-poppins font-bold tracking-[0.03em] text-[12px]': {},
        },
        '.button-text-mobile': {
          '@apply font-poppins font-bold tracking-[0.04em] uppercase text-[14px]': {},
        },
        '.link-text-mobile': {
          '@apply font-poppins font-bold underline text-[14px]': {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
        ".custom-scrollbar::-webkit-scrollbar": {
          width: '5px',
          height: '3px',
          'border-radius': '2px',
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          '@apply bg-background': {},
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          '@apply bg-primary border-[50px]': {},
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          '@apply bg-primary-light': {},
        },
      });
    }),
  ],
};