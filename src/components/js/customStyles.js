const tabsStyles = {
  tabList:"flex-wrap sm:flex-nowrap bg-primary text-background shadow-lg shadow-primary-300/50 font-mono",
  tabContent:"text-default group-data-[selected]:text-primary",
  tab: " data-[hover-unselected]:opacity-100  hover:font-bold hover:text-background",
};

const profileStyles = {
  imgStyles: {
    wrapper: "row-start-1 row-end-3 col-start-1 col-end-[-1]",
  },
  avatarStyles: {
    img: "opacity-100",
    base: "col-start-1 col-end-[-1] z-20 row-start-2 row-end-4 m-2",
  },
};

const contactoStyles = {
  label: "group-data-[filled-within]:text-default",
  input:"placeholder:text-default/80 group-data-[has-value]:text-default",
  inputWrapper: "border-default/50 hover:border-default/75 after:bg-default",
};

const toastSuccessStyles={
  position:"top-center",
  duration:2500,
  style:{
    border:"1px solid #5CDB94",
    background:"#D9F8D3",
    color:"#05396B"
  }
}

const toastErrorStyles={
  position:"top-center",
  duration:2500,
  style:{
    border:"1px solid #5CDB94",
    background:"#FAD9D0",
    color:"#05396B"
  }
}

export { tabsStyles, profileStyles, contactoStyles, toastSuccessStyles,toastErrorStyles };
