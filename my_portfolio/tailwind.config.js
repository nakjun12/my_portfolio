/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //이게 모드임
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
