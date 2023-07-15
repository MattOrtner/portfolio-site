import { useState } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";
import FrontImage from "../public/front.jpg";
import BackImage from "../public/back.jpg";
import SideImage from "../public/side.jpg";
import VitruvianCarousel from "./components/VitruvianCarousel";

const AboutSection = () => {
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
    <div>
      <div className="flex gap-16">
        <VitruvianCarousel
          frontHandler={frontHandler}
          backHandler={backHandler}
          sideHandler={sideHandler}
        />
        <div className="flex w-[50%] items-end flex-col z-10 gap-10 font-mono">
          <div className="w-[30%] text-center bg-slate-500 p-4 shadow-xl shadow-black rounded-md">
            I love to create.
          </div>
          <div className="w-[45%] bg-slate-400 p-4 text-center shadow-lg shadow-black rounded-md">
            I love the evolution.
          </div>
          <div className="w-[60%] text-center bg-slate-300 p-4 shadow-md shadow-black rounded-md">
            Watching the idea moving from inception to completion is incredibly
            fullfilling.
          </div>
        </div>
        <div className="w-[50%]">
          <div className="rotate-6">
            <Image
              alt="Matthew Ortner"
              src={currentImage}
              width={500}
              className="relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
