import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";
import FrontImage from "../public/front.jpg";
import BackImage from "../public/back.jpg";
import SideImage from "../public/side.jpg";
import VetruvianCarousel from "./components/VetruvianCarousel";

const About = () => {
  const [currentImage, setCurrentImage] = useState(FrontImage);

  const frontHandler = () => {
    setCurrentImage(FrontImage);
  };
  const backHandler = () => {
    setCurrentImage(BackImage);
  };
  const sideHandler = () => {
    setCurrentImage(SideImage);
  };

  return (
    <div className="bg-TAN_D h-screen font-mono">
      <NavBar />
      <div className="flex justify-end w-screen absolute h-[75%]">
        <div
          className="text-4xl absolute fjac left-60 inset-0 
        text-center w-[40%] overflow-hidden"
        >
          <Image
            alt="Matthew Ortner"
            src={currentImage}
            width={500}
            height={500}
            className="w-[80%] relative"
          />
        </div>
        <div className="fjac">
          <div className="w-[50%] text-center bg-slate-500 p-4">
            Hi my name is <b>Matthew</b> and I like doing things. Cool things.
            Things that many people think are silly, but I think they are{" "}
            <em>COOL!</em>
          </div>
        </div>
        <VetruvianCarousel
          frontHandler={frontHandler}
          backHandler={backHandler}
          sideHandler={sideHandler}
        />
      </div>
    </div>
  );
};

export default About;
