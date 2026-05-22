/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#1B3A6B",
        accent:    "#F5A623",
        secondary: "#2E8B57",
        lightbg:   "#F8F9FC",
        textdark:  "#1A1A2E",
        textmuted: "#5A6278",
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        heading: ["DM Sans", "sans-serif"],
      },
      animation: {
        marquee:  "marquee 35s linear infinite",
        marquee2: "marquee2 35s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "chevron-bounce": "chevronBounce 1.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%":   { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        chevronBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
