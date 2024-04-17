const { nextui } = require("@nextui-org/react");
import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
       mono:['Space Mono',...defaultTheme.fontFamily.mono]
     },
 
    },
  },
  plugins: [
    nextui({
      themes: {       
        blue_junior:{
          colors:{
            background:"#f2f2f2",
            default:"#fff",            
            primary:"#05396B",     
            danger:"#FAD9D0",
            success:"#D9F8D3",
            warning:"#FFEFB8"       
          }
        }
      },
    }),
   
  ],
};
