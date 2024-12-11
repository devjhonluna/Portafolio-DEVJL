import appclimaImg from "@img/proyectos/AppClima.webp";
import chartDDDImg from "@img/proyectos/Chart-DDD.webp";
import linkreefmImg from "@img/proyectos/LinktreeFrontendMentor.webp";
import LoopStudiosImg from "@img/proyectos/LoopStudios-Landingpage.webp";

export default () => ({
  currentSlide: 1,
  slides: [
    {
      id: 1,
      titulo: "Chart DDD",
      image: chartDDDImg,
      descripcion:
        "Pagina infografica de la evolucion de ventas del manga de dandadan del autor de yukinobu tatsu",
      demo: "https://chart-ddd.netlify.app/",
      repo: "https://github.com/kakashijihen/chart-ddd",
    },
    {
      id: 2,
      titulo: "App Clima",
      image: appclimaImg,
      descripcion:
        "Desarrollo en Javascript y tailwind de un app de clima en tiempo real consumiendo una API de Openweather",
      demo: "https://devjhonluna.github.io/app_clima/",
      repo: "https://github.com/devjhonluna/app_clima",
    },
    {
      id: 3,
      titulo: "Linktree Frontend Mentor",
      image: linkreefmImg,
      descripcion:
        "Clon de Linktree el cual enlaza a los 4 proyectos para principiantes de frontend mentor",
      demo: "https://devjhonluna.github.io/linktree-frontend_mentor/",
      repo: "https://github.com/kakashijihen/linktree-frontend_mentor",
    },
    {
      id: 4,
      titulo: "Landing Page LoopStudios",
      image: LoopStudiosImg,
      descripcion:
        "Creacion de una landing page de una empresa vr como ejercicio de frontend mentor usando HTML Y SCSS",
      demo: "https://devjhonluna.github.io/loopstudios-landing-page-main/",
      repo: "https://github.com/kakashijihen/loopstudios-landing-page-main",
    },
  ],
  previous() {
    const currentSlideId = this.slides.findIndex(
      (item) => item.id === this.currentSlide,
    );
    currentSlideId > 0
      ? (this.currentSlide = this.slides[currentSlideId - 1].id)
      : (this.currentSlideId = this.slides[this.slides.length - 1].id);
  },
  next() {
    const currentSlideId = this.slides.findIndex(
      (slide) => slide.id === this.currentSlide,
    );
    currentSlideId < this.slides.length - 1
      ? (this.currentSlide = this.slides[currentSlideId + 1])
      : (this.currentSlide = this.slide[0].id);
  },
});
