import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation:{
        shake:"shake 0.8s infinite",
      },
      keyframes:{
        shake:{
          "0%, 100%":{transform:"scale(1)"},
          "25%":{transform:"scale(1.08)"},
          "50%":{transform:"translateX(0.98)"},
          "75%":{transform:"translateX(-1.05)"},
        }
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
