const tabStyles = {
  tabList: "bg-default-400 flex justify-start flex-wrap xs:flex-nowrap gap-4",
  tabContent:
    "text-foreground group-data-[hover-unselected=true]:text-primary w-full max-w-xl ",
  tab: "data-[hover-unselected=true]:opacity-100  ",
};

export const avatarStyles = {
  base: "w-28 h-28 text-large bg-inherit ",
  img: "object-contain hover:drop-shadow-lg hover:drop-shadow-[0px_10px_8px_rgba(0,147,224,0.375)]",
};

const toastSuccessStyles = {
  position: "top-center",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "colored",
};

const toastErrorStyles = {
  position: "top-center",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "colored",
};

export { tabStyles, toastSuccessStyles, toastErrorStyles };
