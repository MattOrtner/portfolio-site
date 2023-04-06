import Link from "next/link";
const NavBar = () => {
  return (
    <div className="mb-16">
      <ul className="flex gap-10 h-12  justify-center text-center">
        <li className="w-40 bg-NAVY flex justify-center rounded-l-2xl items-center text-slate-200 text-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="w-40 bg-NAVY flex justify-center items-center text-slate-200 text-lg">
          <Link href="/about/">About</Link>
        </li>
        <li className="w-40 bg-NAVY flex justify-center  rounded-r-2xl items-center text-slate-200 text-lg">
          <Link href="/contact/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
