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
        spinLogo: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        upDown: "upDown 5s ease-in-out infinite",
        spinLogo: "spinLogo 4s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
