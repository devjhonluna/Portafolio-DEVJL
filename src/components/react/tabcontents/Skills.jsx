import { Divider } from "@nextui-org/react";
import {
  skillsList
} from "@js/listaSkills";
import MiniCardGallery from "@react/utils/MiniCardGallery";

const Skills = () => {
  return (
    <section className="techno__container__main__tabnav__list__container">
      <h2 >Skills</h2>
      <p>
        Estas son las habilidades que he adquirido con el paso del tiempo,
        con su respectiva categoria y nivel:
      </p>
      <MiniCardGallery skillArray={skillsList}/>   
    </section>
  );
};

export default Skills;
