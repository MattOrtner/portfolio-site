import { useState } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";
import FrontImage from "../public/front.jpg";
import BackImage from "../public/back.jpg";
import SideImage from "../public/side.jpg";
import VitruvianCarousel from "./components/VitruvianCarousel";

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
      <div className="flex justify-end w-screen absolute h-[70%]">
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
        <div className="fjac flex-col gap-3">
          <div className="w-[50%] text-center bg-slate-500 p-4 z-10  shadow-md shadow-black rounded-md">
            I love to create.
          </div>
          <div className="w-[50%] bg-slate-400 p-4 pl-10 z-20 shadow-lg shadow-black rounded-md">
            0 - 1.
          </div>
          <div className="w-[50%] text-center bg-slate-300 p-4 z-30  shadow-xl shadow-black rounded-md">
            Witnessing the evolution of an idea from the inceptiont to
            completion is incredibly fullfilling.
          </div>
        </div>
        <VitruvianCarousel
          frontHandler={frontHandler}
          backHandler={backHandler}
          sideHandler={sideHandler}
        />
      </div>
      <div className="h-[50%] mt-24 w-[65%] mr-auto ml-52 rounded-lg bg-NAVY"></div>
    </div>
  );
};

export default About;
