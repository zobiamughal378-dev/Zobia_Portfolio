/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05080f",
        navy: "#0a1628",
        blue: "#1a6cf5",
        cyan: "#00d4ff",
        purple: "#7c3aed",
        pink: "#f72585",
        card: "#0d1829",
        line: "rgba(0,212,255,0.15)",
        muted: "#8899bb",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "orb-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-30px) scale(1.05)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
      },
      animation: {
        "orb-float": "orb-float 8s ease-in-out infinite",
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};
