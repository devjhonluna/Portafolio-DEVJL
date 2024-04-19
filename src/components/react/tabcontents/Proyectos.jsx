import CardImg from "@react/utils/CardImg.jsx";
import LinkCard from "@react/utils/LinkCard.jsx";
import proyectosItems from "@js/listaProyectos.js"
import { Button, Link } from "@nextui-org/react";

const Proyectos = () => {
  return (
    <section className="techno-tabnav__list__item">
      <h2 className="techno-tabnav__list__item-titulo">Proyectos</h2>
      <div className="techno-tabnav__list__item-proyectosgrid">
        {proyectosItems.map((item) => (
          <CardImg
            key={item.id}
            altText={item.titulo}
            titulo={item.titulo}
            src={item.src}
            descripcion={item.descripcion}
            footer={<LinkCard titulo1="Ver demo" titulo2="Ver codigo" href1={item.demo} href2={item.repo}/>}
          />
        ))}
      </div>
      <Button as={Link} showAnchorIcon isExternal href="https://github.com/devjhonluna?tab=repositories" className="text-default-100 hover:opacity-100 hover:text-background-100 w-full sm:w-fit" variant="ghost">
         Ver todos los proyectos
       </Button>  
    </section>
  );
};

export default Proyectos;
