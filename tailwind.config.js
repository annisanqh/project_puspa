import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: [
    "./src/pages/*/.{js,ts,jsx,tsx,mdx}",
    "./src/components/*/.{js,ts,jsx,tsx,mdx}",
    "./src/app/*/.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        playpen: ["'Playpen Sans'", "cursive"],
      },
    },
  },
  plugins: [],
})


