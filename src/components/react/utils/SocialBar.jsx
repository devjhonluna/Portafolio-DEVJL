import { Github, Linkedin, X,Tiktok } from "@react/icons/Index";
import { Button, ButtonGroup, Link } from "@nextui-org/react";


const SocialBar = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button
        className="techno-profile__card__btn-ghost hover:!text-background-100 hover:!bg-default-100 "
        as={Link}
        isExternal
        href="https://github.com/devjhonluna"
        aria-label="Github"
        variant="ghost"
        isIconOnly
      >
        <Github classSVG="techno-profile__card__btn-ghost-icons" />
      </Button>
      <Button
        className="techno-profile__card__btn-ghost hover:!text-background-100 hover:!bg-default-100 "
        as={Link}
        isExternal
        href="https://www.linkedin.com/in/jhon-alexander-luna-gonzalez-ab30a017a/"
        aria-label="LinkedIn"
        variant="ghost"
        isIconOnly
      >
        <Linkedin classSVG="techno-profile__card__btn-ghost-icons" />
      </Button>
      <Button
        className="techno-profile__card__btn-ghost hover:!text-background-100 hover:!bg-default-100 "
        as={Link}
        isExternal
        href="https://www.tiktok.com/@dev.jhon.luna?is_from_webapp=1&sender_device=pc"
        aria-label="Tiktok"
        variant="ghost"
        isIconOnly
      >
        <Tiktok classSVG="techno-profile__card__btn-ghost-icons" />
      </Button>
      <Button
        className="techno-profile__card__btn-ghost hover:!text-background-100 hover:!bg-default-100 "
        as={Link}
        isExternal
        href="https://twitter.com/DevJhonluna"
        aria-label="X fka Twitter"
        variant="ghost"
        isIconOnly
      >
        <X classSVG="techno-profile__card__btn-ghost-icons" />
      </Button>
    </div>
  );
};

export default SocialBar;
