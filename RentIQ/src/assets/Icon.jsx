const RentIqIcon = ({ size = 48, className = "" }) => {
  const px = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pin */}
      <path
        d="M32 6C21 6 14 13 14 23c0 10 12 24 17 29 5-5 17-19 17-29 0-10-7-17-16-17z"
        fill="#2563EB"
      />

      {/* Roof */}
      <path d="M22 27L32 19L42 27V38H22V27Z" fill="white" />

      {/* Door / R-style block */}
      <path d="M30 32h7a3 3 0 0 1 0 6h-7v-6z" fill="#0EA5E9" />
    </svg>
  );
};

export default RentIqIcon;
