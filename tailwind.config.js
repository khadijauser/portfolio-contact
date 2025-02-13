module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'poppins',
      secondary: 'Roboto',
      tertiary: 'Lobster',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#46b4e3',
      },
      backgroundImage: {
        site: "url('./assets/backg1.jpg')",
        about: "url('./assets/a3-removebg-preview.png')",
        services: "url('./assets/a1-removebg-preview.png')",
      },
    },
    
  },
  plugins: [],
};
