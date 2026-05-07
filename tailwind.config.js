/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
          foreground: "#ffffff",
        },
        slate: {
          950: "#020617",
          900: "#0f172a",
          800: "#1e293b",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
