/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      colors: {
        'Marine-blue': 'hsl(213, 96%, 18%)',
        'Purplish-blue': 'hsl(243, 100%, 62%)',
        'Pastel-blue': 'hsl(228, 100%, 84%)',
        'Light-blue': 'hsl(206, 94%, 87%)',
        'Strawberry-red': 'hsl(354, 84%, 57%)',
        'Cool-gray': 'hsl(231, 11%, 63%)',
        'Light-gray': 'hsl(229, 24%, 87%)',
        'Very-light-gray': '#F8F9FF',
        'Magnolia': 'hsl(217, 100%, 97%)',
        'Alabaster': "hsl(231, 100%, 99%)",
        'White': 'hsl(0, 0%, 100%)',
        'Purple-hover': '#164A8A',
        'Pink': '#928CFF'
      },
      fontSize: {
        12: '12px',
        15: '15px',
        16: '16px'
      },
      spacing: {
        '100': '100px',
        '1px': '1px',
        '600px': '600px',
        '940px': '940px'
      }
    },
  },
  plugins: [],
}

