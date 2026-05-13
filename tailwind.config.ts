import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14885c",
          dark: "#0d6c48",
          light: "#38a67b",
          soft: "#d9ebe1"
        },
        surface: "#fbf8f2",
        "surface-soft": "#f5f0e8",
        "surface-tint": "#edf5ef",
        ink: "#0d1f16",
        "ink-soft": "#1f3127",
        muted: "#66766d",
        line: "#d9e1da",
        card: "#ffffff"
      },
      boxShadow: {
        soft: "0 18px 38px rgba(20, 136, 92, 0.16)",
        card: "0 18px 44px rgba(13, 31, 22, 0.08)",
        panel: "0 28px 60px rgba(13, 31, 22, 0.10)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 8% 10%, rgba(20,136,92,0.10), transparent 28%), radial-gradient(circle at 92% 6%, rgba(56,166,123,0.08), transparent 30%), linear-gradient(180deg, #fdfaf5 0%, #fbf8f2 42%, #f7f2ea 100%)"
      }
    }
  },
  plugins: []
};

export default config;
