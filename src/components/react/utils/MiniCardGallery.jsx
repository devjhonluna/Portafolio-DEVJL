import { Card, CardBody, Divider } from "@nextui-org/react";

const MiniCardGallery = ({ skillArray }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-2.5 w-full">
      {skillArray.map((item) => (
        <Card key={item.id} className="py-4 px-2 flex flex-col justify-center duration-75 ease-out hover:scale-105">
          <CardBody className="p-0 ">
          <item.icon size="48" classSVG="text-primary my-0 mx-auto" />      
            <div className="text-center sm:text-justify">
              <h3 className="font-bold">{item.label}</h3>
              <Divider className="border-primary border-solid" />
              <p>categoria: {item.categoria}</p>
              <p>nivel: {item.nivel}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default MiniCardGallery;
