import { Divider } from "@nextui-org/react";
import {
  skillsList
} from "@js/listaSkills";
import MiniCardGallery from "@react/utils/MiniCardGallery";

const Skills = () => {
  return (
    <section className="techno-tabnav__list__item">
      <h2 className="techno-tabnav__list__item-titulo">Skills</h2>
      <p className="text-xs sm:text-sm md:text-base">
        Estas son las habilidades que he adquirido con el paso del tiempo,
        con su respectiva categoria y nivel:
      </p>
      <MiniCardGallery skillArray={skillsList}/>   
    </section>
  );
};

export default Skills;
