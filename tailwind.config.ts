// tailwind.config.ts
import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '25%': {
            transform: 'translate(30px, -50px) scale(1.1) rotate(90deg)',
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '50%': {
            transform: 'translate(-20px, 20px) scale(0.9) rotate(180deg)',
            borderRadius: '50% 60% 30% 60% / 60% 40% 60% 30%',
          },
          '75%': {
            transform: 'translate(50px, 10px) scale(1.05) rotate(270deg)',
            borderRadius: '40% 30% 60% 70% / 40% 70% 30% 50%',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1) rotate(360deg)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-pan': 'gradient-pan 15s ease infinite',
        blob: 'blob 20s ease-in-out infinite',
      },
      colors: {
        'green-300': '#86efac',
        'purple-300': '#c084fc',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config
