import { Github, Linkedin, X,Tiktok } from "@react/icons/Index";
import { Button, Link } from "@nextui-org/react";
import { iconProps } from "@js/iconProps";

const commonProps=iconProps("24","techno-profile__card__btn-ghost-icons")
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
        <Github {...commonProps} />
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
        <Linkedin {...commonProps} />
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
        <Tiktok  {...commonProps}/>
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
        <X {...commonProps}/>
      </Button>
    </div>
  );
};

export default SocialBar;
