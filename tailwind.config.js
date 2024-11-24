/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #000428, #004e92)' // Custom space gradient
      },
      keyframes: {
        'space-animation': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        }
      },
      animation: {
        'space-animation': 'space-animation 60s infinite linear',
      },
      fontFamily: {
        sans: ['figtree'],
        alerta: ['alerta-stencil'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, and Opera */
          },
        },
      });
    },
  ],
}
