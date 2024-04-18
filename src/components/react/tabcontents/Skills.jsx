import { Divider } from "@nextui-org/react";
import {
  skillsList
} from "@js/listaSkills";
import MiniCardGallery from "@react/utils/MiniCardGallery";

const Skills = () => {
  return (
    <section className="bg-primary text-default  rounded-medium w-full text-center p-4 grid place-items-center gap-4 shadow-lg shadow-primary-300/50 font-mono">
      <h2 className="text-xl sm:text-2xl font-bold">Skills</h2>
      <p>
        Estas son las habilidades que he adquirido con el paso del tiempo,
        con su respectiva categoria y nivel:
      </p>
      <Divider className="border-background border-solid" />
      <MiniCardGallery skillArray={skillsList}/> 

  
    </section>
  );
};

export default Skills;
