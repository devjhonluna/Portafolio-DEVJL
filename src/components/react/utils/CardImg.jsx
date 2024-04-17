import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

const CardImg = ({ altText, src, titulo, descripcion,footer }) => {
  return (
    <Card className="bg-background sm:max-w-60 md:max-w-xs w-full">
      <CardHeader className="flex justify-center px-0 py-0">
        <Image isZoomed alt={altText} src={src} className="opacity-100" radius="none" />
      </CardHeader>
      <CardBody className="text-primary">
        <h3 className="font-bold text-lg sm:text-xl">{titulo}</h3>
        <p className="text-sm md:text-base italic">{descripcion} </p>
      </CardBody>
      <CardFooter className="flex flex-wrap gap-2">{footer}</CardFooter>
    </Card>
  );
};

export default CardImg;
