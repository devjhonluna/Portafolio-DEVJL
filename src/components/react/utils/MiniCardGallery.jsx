import { Card, CardBody, Divider } from "@nextui-org/react";

const MiniCardGallery = ({ skillArray }) => {
  return (
    <div className="techno-tabnav__list__item-skillsgrid">
      {skillArray.map((item) => (
        <Card key={item.id} className="techno-tabnav__list__item-skillscard duration-75 ease-in hover:shadow-lg hover:shadow-primary-100/25 ">
          <CardBody className="p-0 text-default-300">
          <item.icon size="48px" classSVG="text-default-300 my-0 mx-auto" />      
            <div className="text-center sm:text-justify">
              <h3 className="font-bold">{item.label}</h3>
              <Divider className="border-primary-200 border-solid" />
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
