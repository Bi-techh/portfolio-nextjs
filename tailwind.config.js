/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#b16cea',
        'primary-red': '#ff5e69',
        'primary-orange': '#ff8a56',
        'primary-light-orange': '#ffa84b',
        'text-main': '#000000',
        'text-paragraph': '#666666',
        'link-blue': '#3c46ff',
        'primary': {
          DEFAULT: '#b16cea',
          '50': '#f9f4ff',
          '100': '#f2e8ff',
          '200': '#e6d5ff',
          '300': '#d2b3ff',
          '400': '#c18cff',
          '500': '#b16cea',
          '600': '#9f43d8',
          '700': '#8a2bbe',
          '800': '#73249b',
          '900': '#60217e',
        },
        'secondary': {
          DEFAULT: '#ff5e69',
          '50': '#fff1f2',
          '100': '#ffe4e7',
          '200': '#ffccd4',
          '300': '#ffa3b0',
          '400': '#ff758a',
          '500': '#ff5e69',
          '600': '#ea2645',
          '700': '#ca1837',
          '800': '#a71832',
          '900': '#8c1a30',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(108deg, #b16cea 8%, #ff5e69 40%, #ff8a56 77%, #ffa84b 91%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["Plus Jakarta Text", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Display", "system-ui", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
        slideDown: "slideDown 0.5s ease-in-out forwards",
        slideLeft: "slideLeft 0.5s ease-in-out forwards",
        slideRight: "slideRight 0.5s ease-in-out forwards",
        bounce: "bounce 1s infinite",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#3c46ff',
              '&:hover': {
                color: '#2a33cc',
              },
            },
            strong: {
              color: '#000000',
            },
            h1: {
              color: '#000000',
            },
            h2: {
              color: '#000000',
            },
            h3: {
              color: '#000000',
            },
          },
        },
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
