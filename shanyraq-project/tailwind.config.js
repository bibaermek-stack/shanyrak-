/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shanyraq бренд түстері
        primary: {
          DEFAULT: '#002F6C', // Терең көк
          light: '#004C99',   // Ашық көк
          dark: '#001F47',    // Қою көк
        },
        accent: {
          DEFAULT: '#C9A64D', // Алтын
          light: '#D4B76A',   // Ашық алтын
          dark: '#B08F3A',    // Қою алтын
        },
        text: {
          primary: '#F5F5F5',   // Ақ/ашық сұр
          secondary: '#B0B8C1', // Сұр-көк
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
