import { Github, Linkedin, X,Tiktok } from "@react/icons/Index";
import { Button, ButtonGroup, Link } from "@nextui-org/react";


const SocialBar = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button
        className="text-default hover:opacity-100 hover:text-primary"
        as={Link}
        isExternal
        href="https://github.com/devjhonluna"
        aria-label="Github"
        variant="ghost"
        isIconOnly
      >
        <Github classSVG="w-4 h-4 sm:w-6 sm:h-6" />
      </Button>
      <Button
        className="text-default hover:opacity-100 hover:text-primary "
        as={Link}
        isExternal
        href="https://www.linkedin.com/in/jhon-alexander-luna-gonzalez-ab30a017a/"
        aria-label="LinkedIn"
        variant="ghost"
        isIconOnly
      >
        <Linkedin classSVG="w-4 h-4 sm:w-6 sm:h-6" />
      </Button>
      <Button
        className="text-default hover:opacity-100 hover:text-primary "
        as={Link}
        isExternal
        href="https://www.tiktok.com/@dev.jhon.luna?is_from_webapp=1&sender_device=pc"
        aria-label="Tiktok"
        variant="ghost"
        isIconOnly
      >
        <Tiktok classSVG="w-4 h-4 sm:w-6 sm:h-6" />
      </Button>
      <Button
        className="text-default hover:opacity-100 hover:text-primary "
        as={Link}
        isExternal
        href="https://twitter.com/DevJhonluna"
        aria-label="X fka Twitter"
        variant="ghost"
        isIconOnly
      >
        <X classSVG="w-4 h-4 sm:w-6 sm:h-6" />
      </Button>
    </div>
  );
};

export default SocialBar;
