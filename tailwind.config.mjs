/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors - single source of truth
        bg: {
          DEFAULT: '#faf8ef',
          soft: '#f3f0e2',
          tint: '#ecf4ee',
        },
        ink: {
          DEFAULT: '#2a3a3a',
          soft: '#4f5f5f',
          mute: '#87928f',
        },
        line: {
          DEFAULT: '#e3e0d0',
          soft: '#ebe7d6',
        },
        brand: {
          yellow: {
            DEFAULT: '#e8d860',
            soft: '#f2e788',
          },
          sage: {
            DEFAULT: '#9bc4a0',
            deep: '#7eaa84',
          },
          sky: {
            DEFAULT: '#7bc5dc',
            deep: '#5fb0cb',
          },
        },
      },
      fontFamily: {
        // Typography system
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        pill: '100px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(42,58,58,0.06)',
        lift: '0 20px 50px rgba(42,58,58,0.10)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(95deg, #e8d860 0%, #9bc4a0 50%, #7bc5dc 100%)',
      },
    },
  },
  plugins: [],
};
