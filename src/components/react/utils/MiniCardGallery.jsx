import { iconProps } from "@js/iconProps";
import { Divider } from "@nextui-org/react";

const commonProps = iconProps("48", "text-default-300 my-0 mx-auto");
const MiniCardGallery = ({ skillArray }) => {
  return (
    <ul className="techno__container__main__tabnav__list__container__skills">
      {skillArray.map((item) => (
        <li
          key={item.id}
          className="techno__container__main__tabnav__list__container__skills__card duration-75 ease-in hover:shadow-lg hover:shadow-primary-100/25"
        >
          <article className="p-0 text-default-300 text-center">
            <item.icon {...commonProps} />
            <div className="text-center sm:text-justify">
              <h3 className="font-bold">{item.label}</h3>
              <Divider className="border-primary-200 border-solid" />
              <p>categoria: {item.categoria}</p>
              <p>nivel: {item.nivel}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default MiniCardGallery;
