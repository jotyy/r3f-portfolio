module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#BDD5EA',
        darkest: '#0B0E16',
        dark: '#363636',
        mid: '#ABB8C9',
        light: '#E1E6EB',
        lightest: '#FFFFFF',
        primary: '#050816',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #27375E',
      },
      screens: {
        xs: '450px',
      },
      animation: {
        blob: 'blob 6s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '25%': {
            transform: 'translate(10px, -10px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '75%': {
            transform: 'translate(10px, 10px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
