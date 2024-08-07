import {
  Image,
  Avatar,
  Link,
  Button,
} from "@nextui-org/react";
import { profileStyles } from "@js/customStyles";
import SocialBar from "@react/utils/SocialBar";
import CustomCard from "./CustomCard";
import { socialMediaList } from "@js/listaRedes";

const ProfileCard = () => {
  const { bgStyles, avatarStyles } = profileStyles;
  return (
    <CustomCard className="techno__container__header__profilecard">
      <CustomCard.Header className="techno__container__header__profilecard__imgContainer">
        <Image
          alt="background-header"
          src="./img/codebanner.webp"
          classNames={bgStyles}
        />
        <Avatar src="./img/FotoPortafolio.webp" classNames={avatarStyles} />
      </CustomCard.Header>
      <CustomCard.Body className="techno__container__header__profilecard__bioinfo">
        <h1>Hola, Soy Jhon Luna</h1>
        <p>
          Desarrollador Front-end principiante con pasión por la creación de
          experiencias web atractivas. Comprometido con el aprendizaje continuo
          y la mejora constante. ¡Siempre dispuesto a enfrentar nuevos desafíos
          con entusiasmo y determinación!
        </p>
      </CustomCard.Body>
      <CustomCard.Footer className="techno__container__header__profilecard__links">
        <SocialBar socialMediaArray={socialMediaList} />
        <Button
          isExternal
          href="/assets/DEVJL Resume.pdf"
          as={Link}
          fullWidth="true"
          showAnchorIcon
          variant="ghost"
          className="font-mono ease-in duration-300 hover:text-background-100 hover:opacity-100"
        >
          Descargar CV
        </Button>
      </CustomCard.Footer>
    </CustomCard>
  );
};

export default ProfileCard;
