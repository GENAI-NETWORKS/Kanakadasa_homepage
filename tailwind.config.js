/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#1A472A",   // deep forest green
        accent:    "#E63946",   // vivid crimson red
        secondary: "#F4A261",   // warm amber
        lightbg:   "#FFF8F0",   // warm cream
        textdark:  "#1C1C1E",
        textmuted: "#6B6B6B",
        // Additional palette shades
        "primary-light": "#2D6A4F",
        "primary-dark":  "#0D2818",
        "accent-light":  "#FF6B6B",
        "cream":         "#FFFBF5",
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        heading: ["Merriweather", "Georgia", "serif"],
      },
      animation: {
        marquee:         "marquee 35s linear infinite",
        marquee2:        "marquee2 35s linear infinite",
        "fade-in-up":    "fadeInUp 0.6s ease-out forwards",
        "chevron-bounce":"chevronBounce 1.5s ease-in-out infinite",
        "float":         "float 6s ease-in-out infinite",
        "pulse-slow":    "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
