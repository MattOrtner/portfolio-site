import Link from "next/link";

const NavBar = () => {
  return (
    <div className="p-20 pb-24">
      <ul className="flex h-14 gap-10 justify-center text-center">
        <Link
          className="w-40 cursor-pointer bg-NAVY fjac text-NAVY_T text-lg
          border-b-8 border-r-8 border-NAVY_T rounded-tl-2xl border-double shadow-black shadow-lg
          hover:border-b-0 hover:border-r-0 hover:rounded-none transition-all duration-100 ease-linear"
          href="/"
        >
          Home
        </Link>
        <Link
          className="w-40 cursor-pointer bg-NAVY fjac text-NAVY_T  text-lg
          border-b-8 border-r-8 border-NAVY_T rounded-tl-2xl border-double shadow-black shadow-lg
          hover:border-b-0 hover:border-r-0 hover:rounded-none transition-all duration-100 ease-linear"
          href="/about/"
        >
          About
        </Link>
        <Link
          className="w-40 cursor-pointer bg-NAVY fjac text-NAVY_T text-lg
          border-b-8 border-r-8 border-NAVY_T rounded-tl-2xl border-double shadow-black shadow-lg
          hover:border-b-0 hover:border-r-0 hover:rounded-none transition-all duration-100 ease-linear"
          href="/contact/"
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
