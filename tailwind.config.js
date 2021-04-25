module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    // backgroundSize:{
    //   '125%': '125%',
    // },
    fontSize: {
      'xs': '1.2rem',
      'sm': '1.4rem',
      'base': '1.6rem',
      'lg': '1.8rem',
      'xl': '2rem',
      '2xl': '2.4rem',
      '3xl': '2.8rem',
      '4xl': '3.2rem',
      '5xl': '3.6rem',
      '6xl': '4.8rem',
      '7xl': '6.4rem',
      '8xl': '7.2rem',
    },
    maxWidth:{
      '8xl': '120rem',
    },
    extend: {
      transitionProperty:{
        'size': 'height, width',
      },
      width: {
        'sider': '40rem',
        'content': '80rem',
      },
      maxWidth: {
        '8xl': '120rem',
      },
      fontFamily: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {
      height: ['group-hover'],
      width: ['group-hover'],
    },
  },
  plugins: [],
}
