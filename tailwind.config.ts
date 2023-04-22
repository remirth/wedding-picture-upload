import {type Config} from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-jetbrains)'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
