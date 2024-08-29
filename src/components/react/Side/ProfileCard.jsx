import { socialMediaList } from "@js/arrays/listaRedes";
import { Button, Image, Link } from "@nextui-org/react";
import CustomCard from "@react/utils/CustomCard";
import SocialBar from "@react/utils/SocialBar";

const ProfileCard = () => {
  return (
    <CustomCard className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background to-default-400 text-white overflow-visible gap-3 w-[clamp(21ch,60%,42ch)] shadow-md shadow-foreground-500/50">
      <CustomCard.Header className="p-3 justify-center">
        <Image
          alt="foto-perfil"
          src="./img/fotoportafolio.webp"
          className="rounded-md w-32 h-40 object-cover transition-all ease-soft-spring duration-300 hover:drop-shadow-[0_4px_3px_rgb(255_255_255_/_0.4)] "
        />
      </CustomCard.Header>
      <CustomCard.Body className="flex flex-col gap-2 text-center py-0 px-3">
        <h1>Jhon Alexander Luna González</h1>
        <span className="italic">Desarrollador Frontend</span>       
        <SocialBar array={socialMediaList} className="border-medium border-foreground hover:!bg-foreground hover:text-default" />
      </CustomCard.Body>
      <CustomCard.Footer className="flex flex-col gap-2 px-3 pt-0 pb-3">
        <Button
          isExternal
          href="/assets/DEVJL Resume.pdf"
          as={Link}
          fullWidth="true"
          showAnchorIcon
          variant="ghost"
          className="border-medium border-foreground hover:!bg-foreground hover:text-default"
        >
          Descargar CV
        
        </Button>
      </CustomCard.Footer>
    </CustomCard>
  );
};

export default ProfileCard;
