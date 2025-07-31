type ArrowIcon = { size: number };

export const ArrowIcon: React.FC<ArrowIcon> = ({ size = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 12 14"
    >
      <path
        fill="#000"
        d="M2.433 1.575 3.494.515l5.779 5.777a.996.996 0 0 1 0 1.413l-5.779 5.78-1.06-1.06L7.858 7z"
      ></path>
    </svg>
  );
};
