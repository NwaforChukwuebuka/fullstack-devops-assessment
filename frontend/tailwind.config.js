/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Make sure Tailwind doesn't purge styles used by Ant Design
  corePlugins: {
    preflight: false,
  },
  important: true,
}

