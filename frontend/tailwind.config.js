/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{html,js,tsx}",
    "./src/components/**/*.{html,js,tsx}",
    "./src/*.tsx",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
