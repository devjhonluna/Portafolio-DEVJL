import { iconProps } from "@js/iconProps";
import { Tooltip } from "@nextui-org/react";

const commonProps = iconProps("36", "text-foreground-600 my-0 mx-auto");
const SkillList = ({ array }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {array.map((item) => (
        <Tooltip color="foreground" key={item.id} content={item.label}>
          <li>
            <item.icon {...commonProps} />
          </li>
        </Tooltip>
      ))}
    </ul>
  );
};

export default SkillList;
