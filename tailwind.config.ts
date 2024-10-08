import { background } from "@chakra-ui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },

      keyframes: (theme) => ({
        fadeOut: {
          "0%": {
            color: theme("colors.transparent"),
            backgroundColor: theme("colors.transparent"),
          },
          "100%": { color: "inherit", backgroundColor: "inherit" },
        },
      }),
    },
  },
  plugins: [],
};
export default config;
