import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-40px)" },
        },
      },
      animation: {
        upDown: "upDown 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
