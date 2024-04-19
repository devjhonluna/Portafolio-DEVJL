import { Link, Button } from "@nextui-org/react";

const LinkCard = ({href1, href2,titulo1,titulo2}) => {
  return (
    <>
      <Button as={Link} href={href1} color="default" className="techno-profile__card__btn-ghost hover:!text-background-100 hover:opacity-100 w-full md:w-fit" isExternal  variant="ghost">{titulo1} </Button>
      <Button as={Link} href={href2}  color="default" className="techno-profile__card__btn-ghost hover:!text-background-100 hover:opacity-100 w-full md:w-fit" isExternal variant="ghost">{titulo2}</Button>
    </>
  );
};

export default LinkCard;

