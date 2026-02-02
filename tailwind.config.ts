import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linkup: {
          green: "#1C411E",
          "green-light": "#2D5A30",
          "green-dark": "#142E16",
          "green-hover": "#254A27",
          olive: "#1C411E",
          cream: "#F5F3EF",
          beige: "#EBE8E2",
          sand: "#D9D5CC",
          bg: "#E8E6E1",
          "bg-dark": "#DDDAD3",
          card: "#FFFFFF",
          "card-alt": "#F8F7F5",
          border: "#D1CFC9",
          "border-light": "#E5E3DE",
          text: "#1F2937",
          "text-muted": "#5A5A58",
          "text-light": "#8A8A88",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
