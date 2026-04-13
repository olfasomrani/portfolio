/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gold: "#e6b84a",
        gold2: "#f5d080",
        surface: "#0d1117",
        card: "#111820",
      },
      animation: {
        blink: "blink 2s infinite",
        floatA: "floatA 6s ease-in-out infinite",
        floatB: "floatB 5s ease-in-out infinite",
        cursor: "cursorBlink 1s infinite",
      },
    },
  },
  plugins: [],
};