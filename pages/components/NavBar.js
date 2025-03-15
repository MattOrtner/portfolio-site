import NavButton from "./buttons/NavButton";

const NavBar = () => {
  return (
    <div className="w-full flex justify-end pr-10 max-[400px]:pr-2 max-[400px]:pt-2">
      <ul>
        <NavButton href={"/"} buttonText={"Back"} />
      </ul>
    </div>
  );
};

export default NavBar;
