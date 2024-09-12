import { Switch } from "@nextui-org/react";
import{ useEffect, useState } from "react";
import {Sun, Moon} from "@react/icons/Index"

const CustomSwitch = ({ label }) => {
  const [isSelected, setIsSelected] = useState(()=>{
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return false;
    }

    return true
  });
  useEffect(()=>{
    if(!isSelected){
      document.querySelector("html").classList.add('dark')
    }else{
      document.querySelector("html").classList.remove('dark')
    }
  },[isSelected])
  
  return (
    <Switch
      color="warning"
      isSelected={isSelected}
      onValueChange={setIsSelected}     
      aria-label={label}
      size="lg"
      classNames={{ base: "self-end" }}
      startContent={<Sun/>}
      endContent={<Moon/>}
    />
  );
};

export default CustomSwitch;
