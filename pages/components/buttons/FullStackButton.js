import { useState } from "react";
import Link from "next/link";

const FullStackButton = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleIt = () => {
    setButtonHovered((isHoverved) => !isHoverved);
  };
  const unHandleIt = () => {
    setButtonHovered((isHovered) => !isHovered);
  };
  return (
    <Link
      href="/projects/"
      onMouseOver={handleIt}
      onMouseLeave={unHandleIt}
      className="bg-NAVY p-4 text-lg text-NAVY_T text-center 
              border-b-8 border-r-8 border-double border-NAVY_T cursor-pointer
              shadow-black shadow-lg w-[75%] rounded-2xl hover:bg-slate-300
              hover:text-NAVY transition-all duration-200 ease-linear"
    >
      {buttonHovered ? "Checkout my projects" : "Full-Stack Developer"}
    </Link>
  );
};
export default FullStackButton;
