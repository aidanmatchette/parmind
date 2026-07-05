import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pm: {
          bg: "#F8F6F1",
          surface: "#FFFFFF",
          surfaceWarm: "#FFFDF8",
          ink: "#111111",
          muted: "#74706A",
          hairline: "#E7E1D6",
          gold: "#B58B35",
          green: "#2D8A4B",
          red: "#C53A3A",
          sand: "#EEE3CF"
        }
      },
      boxShadow: {
        pm: "0 18px 50px rgba(17, 17, 17, 0.10)",
        pmSoft: "0 8px 28px rgba(17, 17, 17, 0.07)"
      },
      borderRadius: {
        pm: "28px",
        pmSm: "18px"
      },
      fontSize: {
        display: ["3.75rem", { lineHeight: "0.95", letterSpacing: "-0.055em" }],
        hero: ["2.75rem", { lineHeight: "1", letterSpacing: "-0.045em" }]
      }
    }
  },
  plugins: []
};

export default config;
