import proyectosItems from "@js/listaProyectos.js";
import { Button, Link } from "@nextui-org/react";
import ProjectGallery from "@react/utils/ProjectGallery";

const Proyectos = () => {
  return (
    <section className="techno__container__main__tabnav__list__container">
      <h2>Proyectos</h2>
      <div className="techno__container__main__tabnav__list__container__proyectos">
       <ProjectGallery projectArray={proyectosItems} />
      </div>
      <Button
        as={Link}
        showAnchorIcon
        isExternal
        href="https://github.com/devjhonluna?tab=repositories"
        className="text-default-100 hover:opacity-100 hover:text-background-100 w-full sm:w-fit"
        variant="ghost"
      >
        Ver todos los proyectos
      </Button>
    </section>
  );
};

export default Proyectos;
