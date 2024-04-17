const Notion = ({ size = "24", classSVG = " " }) => {
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
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-notion `+classSVG}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 17.5v-6.5h.5l4 6h.5v-6.5" />
      <path d="M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997z" />
      <path d="M4.5 5.5l2.5 2.5" />
      <path d="M20 7l-13 1v12.5" />
    </svg>
  );
};

export default Notion;
