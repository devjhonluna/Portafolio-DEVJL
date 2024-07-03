import FooterBtns from "@react/utils/FooterBtns.jsx";
import proyectosItems from "@js/listaProyectos.js";
import { Button, Link } from "@nextui-org/react";
import CardOverlay from "@react/utils/CardOverlay";



const Proyectos = () => {
  return (
    <section className="techno__container__main__tabnav__list__container">
      <h2 >Proyectos</h2>
      <div className="techno-tabnav__list__item-proyectosgrid">
        {proyectosItems.map((item) => (     
               
          <CardOverlay
           key={item.id}
           altTexto={`proyecto-`+item.titulo}        
           src={item.src}
          titulo={item.titulo}  
          parrafo={item.descripcion}  
          footer={<FooterBtns titulo1="Ver demo" titulo2="Ver codigo" href1={item.demo} href2={item.repo}/>} 
          />     
         
        ))}
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
