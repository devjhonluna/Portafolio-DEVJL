const tabStyles = {
  tabList: "bg-default-400 flex justify-start flex-wrap xs:flex-nowrap gap-4",
  tabContent:
    "text-foreground group-data-[hover-unselected=true]:text-primary w-full max-w-xl",
  tab: "data-[hover-unselected=true]:opacity-75 ",
};

const toastSuccessStyles = {
  position: "top-center",
  duration: 2500,
  style: {
    border: "1px solid #5CDB94",
    background: "#D9F8D3",
    color: "#1A1A1A",
  },
};

const toastErrorStyles = {
  position: "top-center",
  duration: 2500,
  style: {
    border: "1px solid #5CDB94",
    background: "#FF4500",
    color: "#05396B",
  },
};

export { tabStyles, toastSuccessStyles, toastErrorStyles };
