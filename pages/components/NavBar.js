import NavButton from "./buttons/NavButton";

const NavBar = () => {
  return (
    <div className="p-20 pb-24">
      <ul className="flex h-14 gap-10 justify-center text-center">
        <NavButton href={"/"} buttonText={"Home"} />
      </ul>
    </div>
  );
};

export default NavBar;
