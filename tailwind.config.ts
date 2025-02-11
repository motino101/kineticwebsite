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
        subtitle: "#c0c0c0",
      },
      fontSize: {
        subtitle: '18px',
        button: '18px',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      fontWeight: {
        semibold: "600",
      },
    },
  },
  plugins: [],
} satisfies Config;
