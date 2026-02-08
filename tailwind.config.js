/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space
        'deep-space': {
          50: '#f5f7fa',
          100: '#eaeff6',
          200: '#d4dde8',
          300: '#a8b8d8',
          400: '#7a8bc4',
          500: '#2a2d4a',
          600: '#1a1d2e',
          700: '#0f1119',
          800: '#0a0d14',
          900: '#05060a',
        },
        // Bioluminescent
        'bio': {
          green: '#39ff14',
          purple: '#bf40bf',
          cyan: '#00ffff',
          pink: '#ff006e',
        },
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'mega': ['4rem', { lineHeight: '1.1' }],
        'ultra': ['6rem', { lineHeight: '0.9' }],
      },
      backdropBlur: {
        'glass': '10px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(57, 255, 20, 0.3)',
        'glow-purple': '0 0 30px rgba(191, 64, 191, 0.3)',
        'glow-cyan': '0 0 40px rgba(0, 255, 255, 0.2)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'morph': 'morph 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(57, 255, 20, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(57, 255, 20, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
    },
  },
  plugins: [],
}
