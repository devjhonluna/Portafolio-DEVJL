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
    <Card className="techno-profile__card ">
      <CardHeader className="techno-profile__card__header">
        <Image
          alt="background-header"
          src="./img/codebanner.webp"
          classNames={imgStyles}         
        />
        <Avatar
          src="./img/FotoPortafolio.webp"
          classNames={avatarStyles}
        />
      </CardHeader>
      <CardBody className="techno-profile__card__body">
        <h1 className="text-center techno-bold">
          Hola, Soy Jhon Luna
        </h1>
        <p className="techno-italic">
          Desarrollador Front-end principiante con pasión por la creación de
          experiencias web atractivas. Comprometido con el aprendizaje continuo
          y la mejora constante. ¡Siempre dispuesto a enfrentar nuevos desafíos
          con entusiasmo y determinación!
        </p>
      </CardBody>
      <CardFooter className="techno-profile__card__footer">
        <SocialBar />
        <Button
          isExternal
          href="/assets/DEVJL Resume.pdf"
          as={Link}
          fullWidth="true"        
          showAnchorIcon
          variant="ghost"
          className="techno-profile__card__btn-ghost hover:!text-background-100"  
        >
          Descargar CV
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
