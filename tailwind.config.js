/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary": "linear-gradient(45deg, #726bff, #57b6fe)",
      },
    },
  },
  plugins: [],
};
