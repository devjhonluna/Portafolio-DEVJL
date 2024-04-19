import {HTML5, CSS3, SASS,Javascript,Tailwind,Git,Github,React, Notion,Vite,ChatGPT,VSCode,AstroJs, Netlify} from "@react/icons/Index"

let skillsList=[
  {id:1, icon:HTML5 ,label:"HTML5", categoria:"lenguaje",nivel: "intermedio"},
  {id:2, icon:CSS3 ,label:"CSS3", categoria:"lenguaje",nivel:"principiante"},
  {id:3, icon:Javascript ,label:"Javascript", categoria:"lenguaje",nivel:"principiante"},
  {id:4, icon:SASS,label:"SASS", categoria:"framework",nivel:"principiante"},
  {id:5, icon:Tailwind,label:"Tailwind", categoria:"framework",nivel:"principiante"},
  {id:6, icon:Git,label:"Git",categoria:"herramienta",nivel:"principiante"},
  {id:7, icon:React,label:"React", categoria:"framework",nivel:"principiante"},
  {id:8, icon:Notion,label:"Notion",categoria:"herramienta",nivel:"principiante"},
  {id:9, icon:ChatGPT,label:"ChatGPT",categoria:"herramienta",nivel:"principiante"},
  {id:10, icon:Vite,label:"Vite", categoria:"framework",nivel:"principiante"},
  {id:11, icon:AstroJs,label:"AstroJs", categoria:"framework",nivel:"principiante"},
  {id:12, icon:VSCode,label:"Visual Studio Code", categoria:"herramienta",nivel:"intermedio"},
  {id:13, icon:Github ,label:"Github", categoria:"herramienta",nivel:"principiante"},
  {id:14, icon:Netlify ,label:"Netlify", categoria:"herramienta",nivel:"principiante"},
]

const skillLenguajes=skillsList.filter(lenguaje=>lenguaje.categoria=="lenguaje")
const skillFrameworks=skillsList.filter(lenguaje=>lenguaje.categoria=="framework")
const skillHerramientas=skillsList.filter(lenguaje=>lenguaje.categoria=="herramienta")

export { skillsList}