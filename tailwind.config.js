module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      violet: '#674BB1',
      lightViolet: '#CDBFE0',
      darkViolet: '#8476B1',
      white: '#FFFFFD',
      pink: '#E980E7'
    },

    extend: {
      backgroundImage: {
        'mobile': "url('/bg-mobile.svg')",
        'desktop': "url('/bg-desktop.svg')"
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif']
      },
      spacing: {
        logoWidth: '200px',
        logoHeight: '40px',
        desktopWith: '710px',
        desktopHeight: '514px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
