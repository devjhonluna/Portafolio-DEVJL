import React from "react";
import CustomCard from "../utils/CustomCard";
import { Divider } from "@nextui-org/react";

const ArrayCard = ({ arrayList }) => {
  return (
    <>
      {arrayList.map((item) => (
        <CustomCard key={item.id} className="flex-[1_1_192px] transition-all duration-250 dark:shadow-sm dark:shadow-foreground/30 hover:shadow-lg hover:shadow-secondary-400">
          <CustomCard.Body>
            <h3>{item.titulo}</h3>
            <Divider className="border-1.5 bg-foreground-400" />
            <p>{item.descripcion}</p>
          </CustomCard.Body>
        </CustomCard>
      ))}
    </>
  );
};

export default ArrayCard;
