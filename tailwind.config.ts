import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'tamusa-primary-rich-black-c': '#030000',
      'tamusa-primary-pantone-877-c': '#84888b',
      'tamusa-primary-white': '#ffffff',
      'tamusa-primary-pantone-505-c': '#702e3d',
      'tamusa-secondary-desert-willow': '#dfa8be',
      'tamusa-secondary-texas-star': '#ca3625',
      'tamusa-secondary-lantana': '#f88d2a',
      'tamusa-secondary-sandstone': '#ddc9a3',
      'tamusa-secondary-yellow-rose': '#ffcd00',
      'tamusa-secondary-agave': '#98b8ad',
      'tamusa-secondary-nopal': '#6cca98',
      'tamusa-secondary-cielo': '#00acd8',
      'tamusa-secondary-pantriots-blue': '#004987',
      'tamusa-secondary-shale': '#7a6569',
      'acm-blue': 'rgb(1 130 172 / <alpha-value>)',
      'acm-yellow': 'rgb(255 214 0 / <alpha-value>)',
      'acm-orange': 'rgb(252 146 0 / <alpha-value>)',
      'acm-red': 'rgb(253 27 20 / <alpha-value>)',
      'acm-light-blue': 'rgb(131 206 226 / <alpha-value>)',
      'acm-green': 'rgb(166 188 9 / <alpha-value>)',
      'acm-purple': 'rgb(101 1 107 / <alpha-value>)',
      'acm-dark-blue': 'rgb(9 53 122 / <alpha-value>)',
    },
  },
  plugins: [],
} satisfies Config;
