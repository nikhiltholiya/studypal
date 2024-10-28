/** @type {import('tailwindcss').Config} */
const screenKeys = Array.from({length: 20}, (_, i) => i*5)
const screenSizes = screenKeys.reduce((v, key) => Object.assign(v, {[key]: key}), {});
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
