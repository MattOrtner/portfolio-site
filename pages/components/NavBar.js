import NavButton from "./buttons/NavButton";

const NavBar = () => {
  return (
    <div className="pt-6 pb-14">
      <ul className="flex h-14 ">
        <NavButton href={"/"} buttonText={"Back"} />
      </ul>
    </div>
  );
};

export default NavBar;
