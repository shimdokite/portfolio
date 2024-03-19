import type { Config } from 'tailwindcss';

import tokens from './src/tokens/tokens';

const { colors, boxShadow, dropShadow, letterSpacing } = tokens;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    extend: {
      boxShadow,
      dropShadow,
      letterSpacing,
    },
    plugins: [],
    screens: {
      sm: '450px',
      md: '810px',
      lg: '1177px',
    },
  },
};
export default config;
