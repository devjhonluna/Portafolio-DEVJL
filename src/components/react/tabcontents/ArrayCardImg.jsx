import CustomCard from "../utils/CustomCard";
import { Button, Link } from "@nextui-org/react";

const ArrayCardImg = ({ arrayList }) => {
  return (
    <>
      {arrayList.map((item) => (
        <CustomCard key={item.id} className="grid md:grid-cols-3 gap-2 " >
          <CustomCard.Header className="p-0 md:col-span-1">
            <CustomCard.Img
              src={item.image}
              alt={item.titulo}
              radius="none"
              className="opacity-100 "
            />
          </CustomCard.Header>
          <CustomCard.Body className="md:col-span-2 flex gap-2 p-0">
            <h3>{item.titulo}</h3>
            <p className="flex-1">{item.descripcion}</p>
            <div className="flex items-center flex-wrap gap-2 w-full mb-1">
              <Button as={Link} variant="shadow" href={item.demo} isExternal color="secondary" size="sm" >Ver Demo</Button>
              <Button as={Link} variant="shadow" href={item.repo} isExternal color="secondary" size="sm" >Ver Repo</Button>
            </div>
          </CustomCard.Body>
        </CustomCard>
      ))}
    </>
  );
};

export default ArrayCardImg;
