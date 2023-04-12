import Link from "next/link";
import NavButton from "./buttons/NavButton";

const NavBar = () => {
  return (
    <div className="p-20 pb-24">
      <ul className="flex h-14 gap-10 justify-center text-center">
        <NavButton href={"/"} buttonText={"Home"} />
        <NavButton href={"/about/"} buttonText={"About"} />
        <NavButton href={"/projects/"} buttonText={"Projects"} />
      </ul>
    </div>
  );
};

export default NavBar;
