const { nextui } = require("@nextui-org/react");
import defaultTheme from "tailwindcss/defaultTheme";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },
      screens:{
        'xs': '480px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [
    nextui({
      prefix: "techno_min",
      themes: {
        techno_min: {
          colors: {
            background: {
              100: "#1A1A1A",
              200: "#292929",
              300: "#404040",
            },
            primary: {
              DEFAULT: "#00bfff",
              100: "#00bfff",
              200: "#00a2e0",
              300: "#00619a",
            },
            danger: "#FF4500",
            warning: "#ffe49a",
            default: {
              DEFAULT: "#fff",
              100: "#fff",
              200: "#f2f2f2",
              300: "#e0e0e0",
              foreground: "#fff",
            },
            success: "#D9F8D3",
          },
        },
      },
    }),

    plugin(function technoMinComponents({ addComponents }) {
      addComponents({         
                       
        ".techno-italic": {
          "@apply italic text-xs xs:text-sm sm:text-base":
            {},
        },
        ".techno-bold": {
          "@apply font-bold text-lg xs:text-xl":
            {},
        },
        
      });
    }),
  ],
};
