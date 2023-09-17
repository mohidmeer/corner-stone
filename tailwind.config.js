/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f7c51e',
        secondary:'#2a2a2a',
      },
      fontFamily:{
        sans:"'Raleway', sans-serif",
        popin:"'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}
