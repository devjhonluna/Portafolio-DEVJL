import { Link, Button } from "@nextui-org/react";

const FooterBtns = ({href1, href2,titulo1,titulo2}) => {
  return (
    <>
      <Button as={Link} href={href1} size="sm" color="default" className="techno-profile__card__btn-ghost  hover:!text-background-100 hover:opacity-100  w-fit" isExternal  variant="ghost">{titulo1} </Button>
      <Button as={Link} href={href2} size="sm"  color="default" className="techno-profile__card__btn-ghost  hover:!text-background-100 hover:opacity-100 w-fit" isExternal variant="ghost">{titulo2}</Button>
    </>
  );
};

export default FooterBtns;

