

const VSCode = ({ size = "24", classSVG = "" }) => {
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
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-visual-studio `+ classSVG}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" />
    </svg>
  );
};

export default VSCode;
