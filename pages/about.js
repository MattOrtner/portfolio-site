import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar";

const About = () => {
  return (
    <div className="flex h-screen w-screen flex-col pt-10 px-20 bg-TANL font-mono ">
      <NavBar />
      <h1 className="text-3xl text-rose-950">This is the About</h1>
    </div>
  );
};

export default About;
