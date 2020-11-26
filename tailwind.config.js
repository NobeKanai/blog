// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '104': '26rem'
      },
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': false,
            'code::after': false,
            "pre code::after": false,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
