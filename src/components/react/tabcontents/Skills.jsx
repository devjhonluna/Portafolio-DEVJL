import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import TooltipGallery from "@react/utils/TooltipGallery";
import {skillLenguajes, skillFrameworks, skillHerramientas} from "@js/listaSkills";



const Skills = () => {
  return (
    <section className="bg-primary text-default  rounded-medium w-full text-center p-4 grid place-items-center gap-4 shadow-lg shadow-primary-300/50 font-mono">
      <h2 className="text-xl sm:text-2xl font-bold">Skills</h2>  
      <p>Estas son las habilidades que he adquirido con el paso del tiempo, agrupadas en las distintas categorias de esta seccion:</p>   
      <div className="flex flex-col gap-3 w-full">
        <h3>Lenguajes</h3>
        <Divider className="border-background border-solid" />
         <TooltipGallery skillArray={skillLenguajes} />       
        <h3>Framework</h3>
        <Divider className="border-background border-solid"/>
        <TooltipGallery skillArray={skillFrameworks} />       
        <h3>Herramientas</h3>
        <Divider className="border-background border-solid"/>
        <TooltipGallery skillArray={skillHerramientas} />       
      </div>
    </section>
  );
};

export default Skills;
