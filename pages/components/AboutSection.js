import { useState } from "react";
import Image from "next/image";
import FrontImage from "../../public/front.jpg";
import BackImage from "../../public/back.jpg";
import SideImage from "../../public/side.jpg";
import VitruvianCarousel from "./VitruvianCarousel";

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
    <div className="fjac w-full">
      <div className="flex gap-16 justify-center w-[60%]">
        <VitruvianCarousel
          frontHandler={frontHandler}
          backHandler={backHandler}
          sideHandler={sideHandler}
        />
        <div className="flex  w-[50%] items-end flex-col z-10 gap-10 font-mono max-[900px]:w-[100%] max-[400px]:items-center">
          <div className="w-[50%] text-center bg-slate-500 p-4 shadow-xl shadow-black rounded-md max-[400px]:w-[55%]">
            I love to create.
          </div>
          <div className="w-[80%] bg-slate-400 p-4 text-center shadow-lg shadow-black rounded-md max-[400px]:w-[75%]">
            Watching an idea evolve from inception to completion is incredibly
            fullfilling.
          </div>
          <div className="w-[60%] text-center bg-slate-300 p-4 shadow-md shadow-black rounded-md max-[400px]:w-[55%]">
            I love it.
          </div>
        </div>
        <div className="w-[50%] max-[400px]:hidden">
          <div className="rotate-6">
            <Image
              alt="Matthew Ortner"
              src={currentImage}
              width={550}
              className="relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
