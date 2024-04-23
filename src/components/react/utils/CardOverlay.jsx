import { Card, CardBody, Image } from '@nextui-org/react'
import React from 'react'

const CardOverlay = ({ titulo, src, altTexto, parrafo,footer }) => {
  return (
    <Card  className="techno-tabnav__list__item-proyectosgridcard hover:shadow-lg hover:shadow-primary-100/25 group">
        <Image src={src} alt={altTexto}  className="techno-tabnav__list__item-proyectosgridcard__img" />
        <CardBody className="techno-tabnav__list__item-proyectosgridcard__press group-hover:bottom-0 group-hover:opacity-100 transition-all duration-400">
            <h3 className='techno-bold'>{titulo}</h3>
            <p className='techno-italic'>{parrafo}</p>
            <div className='flex items-center flex-wrap gap-2'>
                {footer}
            </div>
        </CardBody>
    </Card>
  )
}

export default CardOverlay