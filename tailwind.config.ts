import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, var(--tw-gradient-stops))",
        "gradient-radial-b":
          "radial-gradient(circle at bottom, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...require("tailwindcss/colors"),
      "brand-primary": "#52ff00",
      bg: {
        100: "#5C6083",
        200: "#0D0E13",
      },
    },
    animation: {
      ...require("tailwindcss/defaultConfig").theme.animation,
      "bounce-short": "bounce 1s ease-in-out 3.5",
    },
  },
  plugins: [],
};
export default config;
