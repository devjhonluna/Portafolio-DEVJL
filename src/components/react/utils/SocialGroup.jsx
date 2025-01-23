import { Button, Link } from "@heroui/react";
import { socialMediaList } from "@js/arrays/listaRedes";

const SocialGroup = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <ul className="flex gap-2 flex-wrap">
        {socialMediaList.map((item) => (
          <li key={item.id} className="group">
            <Button
              isIconOnly
              as={Link}
              className={
                `border border-foreground bg-background ` + item.classHover
              }
              isExternal
              size="sm"
              href={item.href}
              aria-label={item.label}
            >
              <item.icon size="16" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialGroup;
