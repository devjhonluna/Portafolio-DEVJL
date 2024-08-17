import proyectosItems from "@js/arrays/listaProyectos"
import { Button, Link } from "@nextui-org/react"
import ProjectCardList from "@react/utils/ProjectCardList"

const Proyectos = () => {
  return (
    <section className='flex flex-col items-center gap-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background to-default-400 rounded-md p-4 shadow-md shadow-foreground-500/50'>
       <h2>Proyectos</h2>
      <ProjectCardList projectArray={proyectosItems} />
      <Button
        as={Link}
        showAnchorIcon
        isExternal
        href="https://github.com/devjhonluna?tab=repositories"
        className="border-medium border-foreground hover:!bg-foreground hover:text-default w-full sm:w-fit"
        variant="ghost"
      >
        Ver todos los proyectos
      </Button> 
    </section>
  )
}

export default Proyectos