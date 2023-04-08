import Link from "next/link";

const NavBar = () => {
  return (
    <div className="pt-40">
      <ul className="flex h-14 gap-14 justify-center text-center">
        <Link
          className="w-40 cursor-pointer bg-NAVY flex justify-center rounded-l-3xl items-center
          text-BLUE_T text-lg border-4 border-BLUE_T border-double shadow-black shadow-md hover:text-slate-40
          hover:bg-OLIVE hover:border-OLIVE_T hover:rounded transition-all duration-300 ease-linear"
          href="/"
        >
          Home
        </Link>
        <Link
          className="w-40 cursor-pointer flex justify-center items-center bg-NAVY text-BLUE_T text-lg 
          border-4 border-BLUE_T border-double shadow-black shadow-md hover:text-slate-100
          hover:bg-OLIVE hover:border-OLIVE_T hover:rounded-3xl transition-all duration-300 ease-linear"
          href="/about/"
        >
          About
        </Link>
        <Link
          className="w-40 cursor-pointer flex justify-center items-center bg-NAVY text-BLUE_T text-lg 
          border-4 border-BLUE_T border-double shadow-black shadow-md rounded-r-3xl hover:text-slate-100
          hover:bg-OLIVE hover:border-OLIVE_T hover:rounded transition-all duration-300 ease-linear"
          href="/contact/"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
