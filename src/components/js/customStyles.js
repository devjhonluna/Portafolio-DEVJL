const tabStyles = {
  tabList: "bg-default-400 flex justify-start flex-wrap xs:flex-nowrap gap-4",
  tabContent:
    "text-foreground group-data-[hover-unselected=true]:text-primary w-full max-w-xl ",
  tab: "data-[hover-unselected=true]:opacity-100  ", 
};

const toastSuccessStyles = {
  position: "top-center",
  duration: 2500,
  style: {
    border: "1px solid #5CDB94",
    background: "#388e3c",
    color: "#000",
  },
};

const toastErrorStyles = {
  position: "top-center",
  duration: 2500,
  style: {
    border: "1px solid #d32f2f",
    background: "#d32f2f",
    color: "#fff",
  },
};

export { tabStyles, toastSuccessStyles, toastErrorStyles };
