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
        smSky : "#C3EBFA",
        smSkyLight: "#EDF9FD",
        smPurple: "#CFCEFF",
        smPurpleLight: "#F1F0FF",
        smYellow: "#FAE27C",
        smYellowLight: "#FEFCE8"

      },
    },
  },
  plugins: [],
} satisfies Config;
