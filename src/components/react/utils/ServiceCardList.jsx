import { Divider } from "@nextui-org/react"
import CustomCard from "./CustomCard"

const ServiceCardList = ({array,...props}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
     {array.map((item)=>(
        <CustomCard key={item.id} {...props}>
         <CustomCard.Body>
            <h3 className="italic font-bold ">{item.titulo}</h3>
            <Divider className="border-2 bg-primary-200" />
            <p className="italic text-[clamp(0.75rem,_0.625vw_+_0.5rem,_1rem)]">{item.descripcion}</p>
         </CustomCard.Body>
       </CustomCard>         
     ))}
    </div>
  )
}

export default ServiceCardList