import CardImg from "@react/utils/CardImg.jsx";
import LinkCard from "@react/utils/LinkCard.jsx";
import proyectosItems from "@js/listaProyectos.js"
import { Button, Link } from "@nextui-org/react";

const Proyectos = () => {
  return (
    <section className="bg-primary text-default  rounded-medium w-full text-center p-4 grid place-items-center gap-4 shadow-lg shadow-primary-300/50 font-mono">
      <h2 className="text-xl sm:text-2xl font-bold">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      <Button as={Link} showAnchorIcon isExternal href="https://github.com/devjhonluna?tab=repositories" className="text-default hover:opacity-100 hover:text-primary w-full sm:w-fit" variant="ghost">
         Ver todos los proyectos
       </Button>  
    </section>
  );
};

export default Proyectos;
