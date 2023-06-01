module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#22C55E',
        darkest: '#0F172A',
        dark: '#27375E',
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
      backgroundImage: {
        'hero-pattern': "url('/img/pattern.png')",
      },
    },
  },
  plugins: [],
}
