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
        '60%': '60%',
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
        background: '#01102C',
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
        '12': ['12px', { lineHeight: '16.8px' }],
        '14': ['14px', { lineHeight: '16.8px' }],
        '16': ['16px', { lineHeight: '22.4px' }],
        '18': ['18px', { lineHeight: '25.2px' }],
        '20': ['20px', { lineHeight: '24px' }],
        '24': ['24px', { lineHeight: '28.8px' }],
        '24-body': ['24px', { lineHeight: '33.6px' }],
        '32': ['32px', { lineHeight: '38.4px' }],
        '36': ['36px', { lineHeight: '43.2px' }],
        '48': ['48px', { lineHeight: '57.6px' }],
      },
      width: {
        'initial': 'initial',
        '31%': '31%',
        '32%': '32%',
        '48%': '48%',
        '49%': '49%',
      },
      maxWidth: {
        'grid-icon-text': '14rem',
        'grid-icon-text-icon-lg': '9rem',
        'grid-icon-text-icon': '5rem',
      },
      height: {
        'initial': 'initial',
        'header' : '40rem',
        'page-introduction-image': '32rem',
      },
      minHeight: {
        '300px': '300px',
      },
      transitionProperty: {
        'height': 'height',
        'box-shadow': 'box-shadow',
      },
      boxShadow: {
        'button': '0px 0px 35px 7px rgba(237, 37, 78, .8)',
        'card-member': '0px 0px 57px rgba(97, 231, 134, .5)',
      },
      backgroundImage: {
        'highlight-circle' : `url('/svg/highlight_circle.svg')`
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50',
      }
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '1.75rem',
        xl: '2.5rem',
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
