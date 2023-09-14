import Link from "next/link";
const NavButton = ({ href, buttonText }) => {
  return (
    <Link
      href={href ?? ""}
      className="w-60 h-16 cursor-pointer bg-NAVY fjac text-NAVY_T text-lg
          border-4 border-NAVY_T border-double shadow-black shadow-lg over:rounded-none transition-all duration-100 ease-linea
          hover:border-0 hr"
    >
      {buttonText}
    </Link>
  );
};
export default NavButton;
