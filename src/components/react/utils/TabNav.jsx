import { useState } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { tabsStyles } from "@js/customStyles.js";
import tabItems from "@js/listaTab.js";


const TabNav = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="techno-tabnav">
      <Tabs
        variant="solid"
        aria-label="Tabs dynamic"
        classNames={tabsStyles}
        items={tabItems}
        selectedKey={selected}
        onSelectionChange={setSelected}
        fullWidth="true"
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className="w-full">
            <item.content />
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default TabNav;
