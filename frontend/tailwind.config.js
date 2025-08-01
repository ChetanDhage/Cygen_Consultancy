// tailwind.config.js
module.exports = {
  
  darkMode: 'class', // IMPORTANT!
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:'#008bdd', primaryLight:'#e3f1f5',
        secondary: '#9333ea',     // Purple-600
        accent: '#14b8a6',        // Teal-500
        success: '#22c55e',       // Green-500
        dark: '#090d13',          // Custom dark
      },
    },
  },
  plugins: [],

};
//blue primary:'#008bdd', primaryLight:'#e3f1f5',
//green primary: '#02cd00',  primaryLight: '#e2ffe1',