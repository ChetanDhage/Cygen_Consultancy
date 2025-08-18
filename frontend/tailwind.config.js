// tailwind.config.js
module.exports = {
  
  darkMode: 'class', // IMPORTANT!
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
      primary: '#a855f7',  primaryLight: '#efe5ffe6',
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
//black primary: '#000',  primaryLight: '#e2ffe1',
//purple primary: '#a855f7',  primaryLight: '#e2ffe1',