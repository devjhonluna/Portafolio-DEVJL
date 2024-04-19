import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";

const CardImg = ({ altText, src, titulo, descripcion,footer }) => {
  return (
    <Card className="techno-tabnav__list__item-proyectosgridcard duration-100 ease-soft-spring hover:shadow-lg hover:shadow-primary-100/25 ">
      <CardHeader className="flex justify-center px-0 py-0">
        <Image isZoomed alt={altText} src={src} className="opacity-100" radius="none" />
      </CardHeader>
      <CardBody className="text-default-300">
        <h3 className="font-bold text-lg sm:text-xl">{titulo}</h3>
        <Divider className="border-primary-200 border-solid" />
        <p className="text-sm md:text-base italic">{descripcion} </p>
      </CardBody>
      <CardFooter className="flex flex-wrap gap-2">{footer}</CardFooter>
    </Card>
  );
};

export default CardImg;
