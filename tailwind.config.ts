import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS — colours, fonts and animation live here.
 * Change a value once and the whole site follows.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#070A13", 900: "#0B1020", 800: "#111830", 700: "#1A2340" },
        fg: { DEFAULT: "#E8ECF7", muted: "#A9B3CE", dim: "#7581A1" },
        electric: { DEFAULT: "#4D8DFF", soft: "#8DB8FF" },
        iris: { DEFAULT: "#8B6CFF", soft: "#B9A8FF" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(30px,-20px,0) scale(1.06)" },
        },
        pulseNode: { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "1" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        node: "pulseNode 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
