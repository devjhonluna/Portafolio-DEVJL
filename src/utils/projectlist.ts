import LoopStudiosImg from "@/assets/img/proyectos/LoopStudios-LandingPage.webp";
import AppClimaImg from "@/assets/img/proyectos/weather-app-fm.webp";
import MiniCueImg from "@/assets/img/proyectos/minicue.webp";
import ZahtexImg from "@/assets/img/proyectos/zahtex.webp";

interface proyectoslist {
  id: number;
  titulo: string;
  img: any;
  descripcion: string;
  demo: string;
  repo: string;
}

let proyectoslist: proyectoslist[] = [
  {
    id: 1,
    titulo: "MiniCue",
    img: MiniCueImg,
    descripcion:
      "Prototipo de un generador de guiones de TikTok llamado Minicue, realizado para la hackathon de Midudev, auspiciado por Vercel",
    demo: "https://chart-ddd.netlify.app/",
    repo: "https://github.com/kakashijihen/chart-ddd",
  },
  {
    id: 2,
    titulo: "App Clima Open Meteor",
    img: AppClimaImg,
    descripcion:
      "Aplicación web del clima con modo oscuro, desarrollada con la API de Open Meteor para la primera hackathon de Frontend Mentor. ",
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
    titulo: "Loop Studios",
    img: LoopStudiosImg,
    descripcion:
      "Landing page sobre una empresa ficticia de realidad virtual. Desarrollada con HTML y SCSS como reto para Frontend Mentor",
    demo: "https://devjhonluna.github.io/loopstudios-landing-page-main/",
    repo: "https://github.com/kakashijihen/loopstudios-landing-page-main",
  },
];

export default proyectoslist;
