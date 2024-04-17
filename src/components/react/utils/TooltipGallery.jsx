import { Card, CardBody, Tooltip } from '@nextui-org/react'
import TooltipContent from '@react/utils/TooltipContent'

const TooltipGallery = ({skillArray}) => {
  return (
    <section className="flex flex-wrap my-0 mx-auto w-3/5 gap-4 py-8 px-0 font-mono">
    {skillArray.map((item) => (
      <Tooltip showArrow={true} key={item.id} content={<TooltipContent titulo={item.label} texto={`Nivel: ` + item.nivel} />} className="bg-background text-primary">
        <Card className="flex-[1_1_5rem]" >
          <CardBody>
            <item.icon size="48" classSVG="text-primary my-0 mx-auto"/>
          </CardBody>
        </Card>
      </Tooltip>
    ))}
  </section>
  )
}

export default TooltipGallery