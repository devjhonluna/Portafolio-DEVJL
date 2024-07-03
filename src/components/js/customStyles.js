const tabsStyles = {
  tabList:"techno__container__main__tabnav__list",
  tabContent:"text-default-100 group-data-[selected]:text-background-100",
  cursor: "bg-default-100 hover:text-primary-200",
  tab: "data-[hover-unselected]:opacity-100  hover:font-bold ",
};

const profileStyles = {
  bgStyles: {
    wrapper: "techno__container__header__profilecard__imgContainer__bg ",   
  },
  avatarStyles: {
    img: "opacity-100",
    base: "techno__container__header__profilecard__imgContainer__avatar",
  },
};

const contactoStyles = {
  label: "group-data-[filled-within]:text-default-100",
  input:"placeholder:text-default-10/80 group-data-[has-value]:text-default-100",
  inputWrapper: "border-default-100/50 hover:border-default-100/75 after:bg-default-100",
};

const toastSuccessStyles={
  position:"top-center",
  duration:2500,
  style:{
    border:"1px solid #5CDB94",
    background:"#D9F8D3",
    color:"#1A1A1A"
  }
}

const toastErrorStyles={
  position:"top-center",
  duration:2500,
  style:{
    border:"1px solid #5CDB94",
    background:"#FF4500",
    color:"#05396B"
  }
}


export { tabsStyles, profileStyles, contactoStyles, toastSuccessStyles,toastErrorStyles};
