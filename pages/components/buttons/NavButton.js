import Link from "next/link";
const NavButton = ({ href, buttonText }) => {
  return (
    <Link
      href={href ?? ""}
      className="w-60 h-16 cursor-pointer bg-NAVY fjac text-NAVY_T text-lg
          border border-NAVY_T  shadow-black shadow-lg hover:rounded-xl transition-all duration-100 ease-linear hover:border-double hover:border-4 "
    >
      {buttonText}
    </Link>
  );
};
export default NavButton;
