/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090c12",
        panel: "#101623",
        line: "#1d2535",
        text: "#e8edf6",
        muted: "#9ea8bc",
        accent: "#ff8a3d",
        accentSoft: "#ffb381",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 138, 61, 0.2), 0 8px 30px rgba(255, 138, 61, 0.12)",
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
