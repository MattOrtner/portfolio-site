import Link from "next/link";
const NavButton = ({ href, buttonText }) => {
  return (
    <Link
      href={href ?? ""}
      className="w-60 h-16 animate-jump-in animate-delay-300 animate-once cursor-pointer fjac text-lg
          border-2 border-black hover:shadow-black hover:shadow-lg hover:rounded-[24px] transition-all duration-100 ease-linear hover:border-2"
    >
      {buttonText}
    </Link>
  );
};
export default NavButton;
