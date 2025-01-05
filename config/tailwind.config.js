const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      // Primary Colors
      'rose': '#FDBAA3',
      'white': '#FFFFFF',
      'midnight': '#3C3D43',
      'cream-white': '#FFFDFA',
      // Semantic Colors
      'semantinc-red': '#F7685C',
      'semantic-green': '#30C58D',
      // Post Colors
      'opaque-light-yellow': '#fbeb9566',
      'opaque-red-orange': '#fdbda366',
      'opaque-lilac': '#b6a5cb66',
      'opaque-green-cyan': '#98d2bc99',
      'opaque-light-cyan': '#aee9e899',
      // Gray Colors
      'gray': {
        300: '#8C8A97',
        400: '#808080',
        600: '#4D4D4D',
        800: '#343539',
        900: '#000000'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
