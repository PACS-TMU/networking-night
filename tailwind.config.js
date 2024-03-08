/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background": "#F9F8FD",
      "foreground": "#191F2D",
      "highlight": "#CBC5EA",
      "highlight-light": "#E5E2F5",
      "highlight-dark": "#4a1d91"
    },
    fontFamily: {
      sans: ['var(--sans)'],
      serif: ['var(--serif)'],
    },
  },
  plugins: [],
};
