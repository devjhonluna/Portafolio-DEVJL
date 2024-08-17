import { Button, Link } from "@nextui-org/react";
import CustomCard from "./CustomCard";

const ProjectCardList = ({ projectArray }) => {
  return (
    <div className="grid gap-2 w-full grid-cols-1 xs:grid-cols-[repeat(auto-fit,minmax(min(25ch,50%),1fr))]">
      {projectArray.map((item) => (
        <CustomCard
          key={item.id}
          className="h-fit duration-100 ease-soft-spring shadow-md shadow-foreground/25 hover:shadow-lg hover:shadow-primary-100/50 group"
        >
          <CustomCard.Img src={item.src} alt={item.titulo} className="z-0 w-full h-full object-cover" />
          <CustomCard.Body className="absolute inset-0 z-10 flex items-start justify-end text-foreground-600 bg-background/75 -bottom-40 opacity-0 gap-1 sm:gap-2.5 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-400">
            <h3>{item.titulo}</h3>
            <p className="italic text-[clamp(0.75rem,_0.625vw_+_0.5rem,_1rem)]">{item.descripcion}</p>
            <div className="flex items-center flex-wrap gap-2 w-full">
              <Button
                as={Link}
                href={item.demo}
                size="sm"
                isExternal
                variant="ghost"
                className="border-small border-foreground hover:!bg-foreground hover:text-default w-full sm:w-fit"
              >
                Ver Demo
              </Button>
              <Button
                as={Link}
                href={item.repo}
                size="sm"
                isExternal
                variant="ghost"
                className="border-small border-foreground hover:!bg-foreground hover:text-default w-full sm:w-fit"
              >
                Ver Repo
              </Button>
            </div>
          </CustomCard.Body>
        </CustomCard>
      ))}
    </div>
  );
};

export default ProjectCardList;
