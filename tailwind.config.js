/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hijau tosca selaras logo Xclusive Gift
        brand: {
          50:  '#E6F5F4',
          100: '#C2E6E4',
          200: '#8DCFCC',
          300: '#57B8B4',
          400: '#2FA3A0',
          500: '#1D8E8B',  // medium tosca
          600: '#177877',
          700: '#1D6464',  // warna utama (cocok dengan logo)
          800: '#164E4E',
          900: '#0F3838',
        },
        gold: {
          400: '#D4A843',
          500: '#C49A28',  // aksen emas seperti di logo
          600: '#A37E1A',
        },
        cream: '#F5EDE0',  // krem/beige latar logo
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
