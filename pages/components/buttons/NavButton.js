import Link from "next/link";
const NavButton = ({ href, buttonText }) => {
  return (
    <Link
      className="w-40 cursor-pointer bg-NAVY fjac text-NAVY_T text-lg
          border-b-8 border-r-8 border-NAVY_T rounded-tl-2xl border-double shadow-black shadow-lg
          hover:border-b-0 hover:border-r-0 hover:rounded-none transition-all duration-100 ease-linear"
      href={href}
    >
      {buttonText}
    </Link>
  );
};
export default NavButton;
