import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kr: ['var(--font-noto-kr)'],
        ja: ['var(--font-noto-ja)'],
        cn: ['var(--font-noto-cn)'],
        en: ['var(--font-roboto-en)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          small: '2px',
          medium: '8px',
          large: '12px',
        },
        fontSize: {
          tiny: '9px',
          small: '11px',
          medium: '16px',
          large: '24px',
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#71C4EF',
              100: '#D4EAF7',
              200: '#3B3C3D',
              foreground: '#FFFEFB',
            },
            secondary: {
              DEFAULT: '#00668C',
              100: '#D4EAF7',
              200: '#00668C',
              foreground: '#FFFEFB',
            },
            background: {
              DEFAULT: '#FFFEFB',
              100: '#FFFEFB',
              200: '#F5F4F1',
              300: '#CCCBC8',
              foreground: '#3B3C3D',
            },
            default: {
              DEFAULT: '#FFFEFB',
              100: '#F5F4F1',
              200: '#F5F4F1',
              300: '#CCCBC8',
            },
            text: {
              100: '#1D1C1C',
              200: '#313D44',
              300: '#CCCBC8',
            },
            foreground: {
              500: '#1D1C1C',
              200: '#313D44',
              300: '#CCCBC8',
            },
          },
        },
        dark: {},
      },
    }),
  ],
};
