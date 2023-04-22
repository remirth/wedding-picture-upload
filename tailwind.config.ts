import {type Config} from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-jetbrains)'],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        rosepine: {
          primary: '#ebbcba',
          secondary: '#1f1d2e',
          accent: '#f6c177',
          neutral: '#31748f',
          'base-100': '#16141f',
          info: '#eb6f92',
          success: '#16A249',
          warning: '#DB7706',
          error: '#DC2828',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
} satisfies Config;
