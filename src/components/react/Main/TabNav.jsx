import tabContents from "@js/arrays/listaTab";
import { tabStyles } from "@js/customStyles";
import useMediaQuery from "@js/hooks/useMediaQuery";
import { Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";

const TabNav = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const isMobile=useMediaQuery('(min-width: 480px)')
  return (
    <Tabs
    variant="solid"
    color="primary"
    aria-label="Options"
    items={tabContents}
    selectedKey={selectedTab}
    onSelectionChange={setSelectedTab}        
    classNames={tabStyles}
    fullWidth={isMobile ? false: true}
    placement="top"  >
    {(item) => (
      <Tab key={item.id} title={item.label} className="w-full ">
        <item.content />
      </Tab>
    )}
  </Tabs>
  );
};

export default TabNav;
