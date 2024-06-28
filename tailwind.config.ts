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
        "neutral-gray": "#E7E7E7",
        "neutral-gray-300": "#B0B0B0",
        "neutral-gray-5": "#3D3D3D",
        "neutral-gray-4": "#888888",
        "neutral-gray-3": "#5D5D5D",
        "neutral-gray-1": "#6E6D6D",
        "color-primary": "#D0D5DD",
        "brand-gray": "#4F4F4F",
        orange: {
          "300": "#DC4A2D",
          bg: "#FEF4F2",
          stroke: "#FED3CA",
        },
        success: {
          "50": "#ECFDF3",
          "200": "#ABEFC6",
          "700": "#067647",
        },
      },
      fontFamily: {
        brand: ["GeneralSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
