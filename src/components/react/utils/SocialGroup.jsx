import { Button, Link,  } from "@nextui-org/react";
import { socialMediaList } from "@js/arrays/listaRedes";





const SocialGroup = () => {

  return (
    <div className="flex flex-wrap gap-2">
      <ul className="flex gap-2 flex-wrap">        
        {socialMediaList.map((item) => (
          <li key={item.id}>
            <Button isIconOnly
              as={Link}
              className="border border-foreground hover:text-background hover:!bg-foreground hover:opacity-100"
              isExternal
              size="sm"
              href={item.href}
              variant="ghost"
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
