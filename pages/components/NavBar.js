import NavButton from "./buttons/NavButton";

const NavBar = () => {
  return (
    <div className="w-full flex justify-end p-6 pb-14">
      <ul className="h-14">
        <NavButton href={"/"} buttonText={"Back"} />
      </ul>
    </div>
  );
};

export default NavBar;
