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
          green: "#7FA689",
          "green-light": "#B0CAB6",
          "green-dark": "#4F6B56",
          "green-hover": "#6B9377",
          olive: "#7FA689",
          gray: "#5A5A5A",
          "gray-hover": "#3F3F3F",
          cream: "#F5F3EF",
          beige: "#EBE8E2",
          sand: "#D9D5CC",
          bg: "#F4F4F5",
          "bg-dark": "#E4E4E7",
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
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
