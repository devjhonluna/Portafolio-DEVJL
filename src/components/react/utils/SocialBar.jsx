import { Button, Link } from "@nextui-org/react";
import { iconProps } from "@js/iconProps";

const commonProps=iconProps("24")
const SocialBar = ({array, ...props}) => {
  return (
    <div className="grid place-items-center grid-cols-4 gap-2.5">
      {array.map((item)=>(
         <Button key={item.id}         
         as={Link}
         isExternal
         href={item.href}
         aria-label={item.label}
         variant="ghost"        
         isIconOnly
         {...props}
       >
         <item.icon {...commonProps}/>
       </Button>
      ))}
    </div> 
  );
};

export default SocialBar;
