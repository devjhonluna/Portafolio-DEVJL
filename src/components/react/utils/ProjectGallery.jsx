import { Button, Link } from "@nextui-org/react";
import CustomCard from "@react/utils/CustomCard";

const ProjectGallery = ({projectArray}) => {
  return (
    <>
    {projectArray.map((item)=>(
         <CustomCard
         key={item.id}
         className="techno__container__main__tabnav__list__container__proyectos__card hover:shadow-lg hover:shadow-primary-100/25 group"
       >
         <CustomCard.Img src={item.src} alt={`proyecto-` + item.titulo} />
         <CustomCard.Body className="techno__container__main__tabnav__list__container__proyectos__card--overlay group-hover:bottom-0 group-hover:opacity-100 transition-all duration-400">
           <h3 className="techno-bold">{item.titulo}</h3>
           <p className="techno-italic">{item.descripcion}</p>
           <div className="flex items-center flex-wrap gap-2">
             <Button
               as={Link}
               href={item.demo}
               size="sm"
               color="default"
               className="font-mono ease-in duration-300 hover:text-background-100 hover:opacity-100  w-fit"
               isExternal
               variant="ghost"
             >
               Ver Demo
             </Button>
             <Button
               as={Link}
               href={item.repo}
               size="sm"
               color="default"
               className="techno-profile__card__btn-ghost  hover:!text-background-100 hover:opacity-100 w-fit"
               isExternal
               variant="ghost"
             >
               Ver Repo
             </Button>
           </div>
         </CustomCard.Body>
       </CustomCard>
    ))}
    </>
  )
}

export default ProjectGallery