/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0b0b0d",
          card: "#141416",
          border: "#26262a",
        },
        gold: {
          DEFAULT: "#d4a853",
          light: "#f5e6c8",
          dark: "#8a6d3b",
          glow: "rgba(212, 168, 83, 0.35)",
        },
        muted: "#9ca3af",
      },
      fontFamily: {
        display: ["Noto Serif SC", "STSong", "SimSun", "serif"],
        body: ["Noto Sans SC", "PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif"],
        mono: ["Consolas", "Monaco", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 168, 83, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 168, 83, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
