module.exports = {
  mode: 'jit',
  important: true,
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        'container': "theme(container.padding.DEFAULT)",
        '31%': '31%',
        '32%': '32%',
        '48%': '48%',
        '49%': '49%',
        'initial' : 'innital',
      },
      colors: {
        //Base
        transparent: 'transparent',
        white: '#FFFFFF',
        current: 'currentColor',
        primary: '#011333',
        secondary: '#ED254E',
        blue: '#6199FC',
        green: '#61E786',
      },
      fontFamily: {
        conthrax: [
          'Conthrax',
          'sans-serif',
          'Arial',
        ],
        futura: [
          'Futura Std',
          'sans-serif',
          'Arial',
        ],
        'futura-bold': [
          'Futura Std Bold',
          'sans-serif',
          'Arial',
        ],
        'futura-heavy': [
          'Futura Std Heavy',
          'sans-serif',
          'Arial',
        ],
      }, 
      fontSize: {
        '18': ['18px', { lineHeight: '22px' }],
        '20': ['20px', { lineHeight: '24px' }],
        '24': ['24px', { lineHeight: '28.8px' }],
        '24-body': ['24px', { lineHeight: '33.6px' }],
        '32': ['32px', { lineHeight: '38.4px' }],
        '36': ['36px', { lineHeight: '43.2px' }],
        '48': ['48px', { lineHeight: '57.6px' }],
      },
      width: {
        'initial': 'initial',
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
      },
      center: true,
    },
    fill: theme => ({
      'white': theme('colors.white'),
      'primary': theme('colors.primary'),
    }),
  },
  variants: {
    extend: {
      container: [],
    },
  },
}
