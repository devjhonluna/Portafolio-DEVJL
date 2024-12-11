const AlpineJs = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M98.444 35.562L126 62.997L98.444 90.432L70.889 62.997z"
        clipRule="evenodd"
        className="group-hover:fill-[#77c1d2]"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m29.556 35.562l57.126 56.876H31.571L2 62.997z"
        clipRule="evenodd"
        className="group-hover:fill-[#2d3441] dark:group-hover:fill-white"
      />
    </svg>
  );
};

export default AlpineJs;
