/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./js/**/*.js",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Passionate Leadership
        primary: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#e63946", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
          DEFAULT: "#e63946", // red-500
        },
        // Secondary Colors - Professional Technical Credibility
        secondary: {
          50: "#f0f9ff", // blue-50
          100: "#e0f2fe", // blue-100
          200: "#bae6fd", // blue-200
          300: "#7dd3fc", // blue-300
          400: "#38bdf8", // blue-400
          500: "#0ea5e9", // blue-500
          600: "#457b9d", // blue-600
          700: "#1d3557", // blue-700
          800: "#1e3a8a", // blue-800
          900: "#1e293b", // blue-900
          DEFAULT: "#457b9d", // blue-600
        },
        // Accent Colors - Collaborative Highlights
        accent: {
          50: "#ecfeff", // cyan-50
          100: "#cffafe", // cyan-100
          200: "#a5f3fc", // cyan-200
          300: "#a8dadc", // cyan-300
          400: "#22d3ee", // cyan-400
          500: "#06b6d4", // cyan-500
          600: "#0891b2", // cyan-600
          700: "#0e7490", // cyan-700
          800: "#155e75", // cyan-800
          900: "#164e63", // cyan-900
          DEFAULT: "#a8dadc", // cyan-300
        },
        // Background & Surface
        background: "#f1faee", // green-50
        surface: "#ffffff", // white
        // Text Colors
        text: {
          primary: "#1d3557", // blue-900
          secondary: "#457b9d", // blue-600
          muted: "#64748b", // slate-500
        },
        // Semantic Colors
        success: {
          50: "#f0fdf4", // green-50
          100: "#dcfce7", // green-100
          500: "#22c55e", // green-500
          700: "#2d6a4f", // green-700
          DEFAULT: "#2d6a4f", // green-700
        },
        warning: {
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          500: "#f77f00", // orange-500
          700: "#c2410c", // orange-700
          DEFAULT: "#f77f00", // orange-500
        },
        error: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          700: "#d00000", // red-700
          DEFAULT: "#d00000", // red-700
        },
      },
      fontFamily: {
        headline: ['Outfit', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        cta: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(29, 53, 87, 0.1)',
        'medium': '0 4px 6px rgba(29, 53, 87, 0.1)',
        'strong': '0 4px 12px rgba(29, 53, 87, 0.15)',
        'hover': '0 8px 16px rgba(29, 53, 87, 0.2)',
        'glow': '0 0 20px rgba(230, 57, 70, 0.3)',
        'glow-secondary': '0 0 20px rgba(69, 123, 157, 0.3)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}