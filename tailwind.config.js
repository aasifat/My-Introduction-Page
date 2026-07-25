/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E0C",
        "bg-soft": "#0D1310",
        card: "#131A16",
        "card-2": "#0F1512",
        line: "#20291F",
        "line-soft": "#1A211A",
        ink: "#F3F1E9",
        "ink-dim": "#9CAA9F",
        "ink-faint": "#6B776C",
        sky: "#6CACE4",
        gold: "#F2C14E",
        pitch: "#2F6B4F",
        "pitch-bright": "#3E8A63",
      },
      fontFamily: {
        display: ["'Archivo Black'", "'Arial Black'", "sans-serif"],
        body: ["'Space Grotesk'", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
