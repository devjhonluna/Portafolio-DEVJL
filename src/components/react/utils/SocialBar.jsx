import { Button, Link } from "@nextui-org/react";
import { iconProps } from "@js/iconProps";

const commonProps=iconProps("24")
const SocialBar = ({socialMediaArray}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialMediaArray.map((item)=>(
         <Button key={item.id}
         className="font-mono ease-in duration-300 hover:text-background-100 hover:bg-default-100 "
         as={Link}
         isExternal
         href={item.href}
         aria-label={item.label}
         variant="ghost"
         isIconOnly
       >
         <item.icon {...commonProps}/>
       </Button>
      ))}
    </div> 
  );
};

export default SocialBar;
