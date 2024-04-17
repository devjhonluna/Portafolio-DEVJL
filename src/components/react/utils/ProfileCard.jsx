import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Avatar,
  CardFooter,
  Link,
  Button,
} from "@nextui-org/react";
import { profileStyles } from "@js/customStyles";
import SocialBar from "@react/utils/SocialBar";

const ProfileCard = () => {
  const { imgStyles, avatarStyles } = profileStyles;
  return (
    <Card className="bg-primary text-default max-w-[clamp(24ch,50%,36ch)] shadow-lg shadow-primary-300/50">
      <CardHeader className="p-0 grid">
        <Image
          alt="background-header"
          src="./img/codebanner.jpg"
          className="object-cover rounded-t-sm rounded-b-none opacity-100 "
          classNames={imgStyles}         
        />
        <Avatar
          src="./img/FotoPortafolio.png"
          className="w-16 h-16 sm:w-24 sm:h-24 text-large"
          classNames={avatarStyles}
        />
      </CardHeader>
      <CardBody className="text-justify py-0 justify-center gap-2">
        <h1 className="text-center font-mono font-bold text-lg sm:text-xl">
          Hola, Soy Jhon Luna
        </h1>
        <p className="font-mono italic">
          Desarrollador Front-end principiante con pasión por la creación de
          experiencias web atractivas. Comprometido con el aprendizaje continuo
          y la mejora constante. ¡Siempre dispuesto a enfrentar nuevos desafíos
          con entusiasmo y determinación!
        </p>
      </CardBody>
      <CardFooter className="flex flex-col gap-4 justify-center">
        <SocialBar />
        <Button
          isExternal
          href="/assets/DEVJL-Resume.pdf"
          as={Link}
          fullWidth="true"
          color="default"
          showAnchorIcon
          variant="ghost"
          className="text-default hover:opacity-100 hover:text-primary font-mono"
        >
          Descargar CV
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
