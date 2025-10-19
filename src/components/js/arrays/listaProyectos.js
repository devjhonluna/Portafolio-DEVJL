import LoopStudiosImg from "@/assets/img/proyectos/LoopStudios-LandingPage.webp";
import AppClimaImg from "@/assets/img/proyectos/weather-app-fm.webp";
import MiniCueImg from "@/assets/img/proyectos/minicue.webp";
import ZahtexImg from "@/assets/img/proyectos/zahtex.webp";

export let proyectoslist = [
  {
    id: 1,
    titulo: "MiniCue",
    img: MiniCueImg,
    descripcion:
      "Prototipo de un generador de guiones de TikTok llamado Minicue, realizado para la hackathon de Midudev, auspiciado por Vercel, usando SvelteKit y el SDK de inteligencia artificial de Vercel",
    demo: "https://chart-ddd.netlify.app/",
    repo: "https://github.com/kakashijihen/chart-ddd",
  },
  {
    id: 2,
    titulo: "App Clima Open Meteor",
    img: AppClimaImg,
    descripcion:
      "Web App de clima con un switch de modo oscuro y usando la API de Open Meteor para obtener sus datos con Astro.js, Alpine.js y Tailwind para la hackathon de Frontend Mentor",
    demo: "https://devjhonluna.github.io/app_clima/",
    repo: "https://github.com/devjhonluna/app_clima",
  },
  {
    id: 3,
    titulo: "Zahtex",
    img: ZahtexImg,
    descripcion:
      "Página web del taller de ensamble y corte de prendas de vestir ZAHTEX realizada con las tecnologías Astro JS, Tailwind y Alpine JS",
    demo: "https://devjhonluna.github.io/linktree-frontend_mentor/",
    repo: "https://github.com/kakashijihen/linktree-frontend_mentor",
  },
  {
    id: 4,
    titulo: "Landing Page LoopStudios",
    img: LoopStudiosImg,
    descripcion:
      "Landing page de una empresa ficticia de VR llamada LoopStudios, desarrollada como ejercicio de frontend mentor usando HTML Y SCSS",
    demo: "https://devjhonluna.github.io/loopstudios-landing-page-main/",
    repo: "https://github.com/kakashijihen/loopstudios-landing-page-main",
  },
];

