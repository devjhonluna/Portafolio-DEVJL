import { Link, Button } from "@nextui-org/react";

const LinkCard = ({href1, href2,titulo1,titulo2}) => {
  return (
    <>
      <Button as={Link} href={href1} color="primary" className="text-primary  hover:bg-foreground hover:text-default hover:border-background hover:opacity-100 w-full md:w-fit" isExternal  variant="ghost">{titulo1} </Button>
      <Button as={Link} href={href2}  color="primary" className="text-primary  hover:bg-foreground hover:text-default hover:border-background hover:opacity-100 w-full md:w-fit" isExternal variant="ghost">{titulo2}</Button>
    </>
  );
};

export default LinkCard;

