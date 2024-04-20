const { nextui } = require("@nextui-org/react");
import { color } from "framer-motion";
import theme from "tailwindcss/defaultTheme";
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
              DEFAULT:"#00bfff",
              100: "#00bfff",
              200: "#00a2e0",
              300: "#00619a",
             
            },
            danger: "#FF4500",
            warning: "#ffe49a",
            default: {       
              DEFAULT:"#fff",      
              100: "#fff",
              200: "#f2f2f2",
              300: "#e0e0e0",
              foreground:"#fff"
            },
            success: "#D9F8D3",
          },
        },
      },
    }),

    plugin(function technoMinComponents({ addComponents }) {
      addComponents({
        ".techno-header": {
          "@apply w-full max-w-4xl flex justify-center": {},
        },
        ".techno-main": {
          "@apply max-w-3xl w-full": {},
        },
        ".techno-footer": {
          "@apply font-mono text-sm text-center sm:text-base md:text-lg text-default-100":
            {},
        },
        ".techno-profile__card": {
          "@apply !text-default-100": {},
          background: " radial-gradient(at center, #404040, #292929)",
          maxWidth: "clamp(27ch,50%,36ch)",
        },
        ".techno-profile__card__header": {
          "@apply !grid !p-0": {},
        },
        ".techno-profile__card__header__img--position": {
          "@apply row-start-1 row-end-3 col-start-1 col-end-3 grid": {},
          "& .techno-profile__card__header__img--position--cover": {
            "@apply object-cover rounded-t-sm rounded-b-none": {},
          },
        },
        ".techno-profile__card__header__avatar-position": {
          "@apply col-start-1 col-end-[-1] !z-20 row-start-2 row-end-4 m-2 !w-16 !h-16 sm:!w-24 sm:!h-24 text-large grid":
            {},
        },
        ".techno-profile__card__body": {
          "@apply !text-justify !py-0 justify-center gap-2": {},
        },
        ".techno-profile__card__footer": {
          "@apply flex flex-col gap-4 justify-center": {},
        },
        ".techno-profile__card__btn-ghost": {
          "@apply font-mono !ease-in !duration-300": {},
        },
        ".techno-profile__card__btn-ghost-icons": {
          "@apply w-4 h-4 sm:w-6 sm:h-6": {},
        },
        ".techno-tabnav": {
          "@apply flex flex-wrap gap-4": {},
        },
        ".techno-tabnav__list": {
          "@apply flex-wrap sm:flex-nowrap text-default-100 font-mono":
            {},
          background: "radial-gradient(at center, #404040, #292929)",
        },
        ".techno-tabnav__list__item": {
          "@apply text-default-100 rounded-medium w-full text-center p-4 grid place-items-center gap-4 font-mono":
            {},
          background: "radial-gradient(at center, #404040, #292929)",
        },
        ".techno-tabnav__list__item-titulo": {
          "@apply text-xl sm:text-2xl font-bold": {},
        },
        ".techno-tabnav__list__item-skillsgrid": {
          "@apply grid gap-2.5 w-full m-3": {},
          gridTemplateColumns: "repeat(auto-fit,minmax(min(12rem,100%),1fr))",
        },
        ".techno-tabnav__list__item-skillscard": {
          "@apply py-4 px-2 flex flex-col justify-center":{},
          background: "radial-gradient(at center ,#292929, #404040)",   
        },
        ".techno-tabnav__list__item-contactogrid": {
          "@apply grid gap-8 grid-cols-1 sm:grid-cols-3": {},         
        },
        ".techno-tabnav__list__item-proyectosgrid": {
          "@apply grid grid-cols-1 sm:grid-cols-2 gap-6": {},       
        },
        ".techno-tabnav__list__item-proyectosgridcard": {
          "@apply sm:max-w-60 md:max-w-xs w-full": {},    
          background: "radial-gradient(at center ,#292929, #404040)",   
        },


      });
    }),
  ],
};
