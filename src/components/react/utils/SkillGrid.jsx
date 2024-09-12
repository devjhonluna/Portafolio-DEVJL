import { skillsList } from "@/components/js/arrays/listaSkills";

const SkillGrid = () => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 m-2.5">
      {skillsList.map((item) => (
        <li key={item.id} className={`p-2 flex flex-col items-center `}>
            <item.icon size={32} className={`fill-current`} />
            <span >{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkillGrid;
