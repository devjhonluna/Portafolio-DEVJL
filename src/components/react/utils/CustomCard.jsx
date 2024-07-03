import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react"

const CustomCard = ({children,...props}) => {
  return (
    <Card {...props}>
        {children}
    </Card>
  )
}

const Header=({children,...props})=><CardHeader {...props}>{children}</CardHeader>
const Body=({children,...props})=><CardBody {...props}>{children}</CardBody>
const Footer=({children,...props})=><CardFooter {...props}>{children}</CardFooter>
const Img=({...props})=><Image {...props}/>

CustomCard.Header=Header
CustomCard.Body=Body
CustomCard.Footer=Footer
CustomCard.Img=Img


export default CustomCard