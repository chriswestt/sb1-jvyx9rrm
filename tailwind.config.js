/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 1.5s ease-out forwards, pan 15s linear infinite",
        'text-glow': "text-glow 20s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "10%": {
            opacity: 1,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(100%)",
          },
        },
        pan: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        'text-glow': {
          "0%": {
            'text-shadow': '0 0 20px rgba(255,255,255,0.1)',
            transform: 'translateZ(0px)',
          },
          "25%": {
            'text-shadow': '0 0 50px rgba(255,255,255,0.4)',
            transform: 'translateZ(15px)',
          },
          "50%": {
            'text-shadow': '0 0 20px rgba(255,255,255,0.1)',
            transform: 'translateZ(0px)',
          },
          "75%": {
            'text-shadow': '0 0 50px rgba(255,255,255,0.4)',
            transform: 'translateZ(15px)',
          },
          "100%": {
            'text-shadow': '0 0 20px rgba(255,255,255,0.1)',
            transform: 'translateZ(0px)',
          },
        },
      },
    },
  },
  plugins: [],
};