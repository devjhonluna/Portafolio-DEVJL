import { servicios } from "@js/arrays/listaServicios";
import { skillsList } from "@js/arrays/listaSkills";
import { Divider } from "@nextui-org/react";
import ServiceCardList from "@react/utils/ServiceCardList";
import SkillList from "@react/utils/SkillList";


const AboutMe = () => {
  return (
    <article className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background to-default-400 rounded-md flex flex-col gap-4 p-2.5 xs:p-4">
       <div className="flex flex-col gap-4">
        <h2>Sobre Mi</h2>
        <Divider className="border-2 bg-foreground-400"/>
        <p className="text-[clamp(0.75rem,_0.417vw_+_0.667rem,_1rem)]">
          Soy Jhon Alexander Luna, un apasionado desarrollador frontend en nivel
          junior. Mi entusiasmo por la Inteligencia Artificial me impulsa a
          aprender continuamente. Creativo y amante de los retos, busco
          oportunidades para expresar mi visión única en cada línea de código.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2>Servicios que Puedo ofrecer</h2>
        <Divider className="border-2 bg-foreground-400"/>
        <ServiceCardList
          array={servicios}
          className="bg-transparent border-foreground-900 flex-[1_1_12rem] hover:shadow-lg hover:shadow-primary-100/25"
        />
      </div>
      <div className="flex flex-col gap-4">
          <h2 className="italic">Tecnologias que uso</h2>
          <Divider className="border-2 bg-foreground-400"/>
          <SkillList array={skillsList} />
        </div> 
    </article>
  );
};

export default AboutMe;
