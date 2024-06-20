/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '375px', 'max': '667px'}, // iPhone SE media query
        'md': { 'min': '668px', 'max': '1023px' }, // ipad mini media query
        'lg': {'min': '1024px', 'max': '1280px' }, // desktop media query
      },
    },
  },
  plugins: [],
}

