const Vite = ({ size = "24", classSVG = " " }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-vite `+ classSVG}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
      <path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
    </svg>
  );
};

export default Vite;
