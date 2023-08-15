import Image from "next/image";
import profilePhoto from "../public/MainPhoto.jpg";
import DevIconGroup from "./components/DevIconGroup";
import PortfolioButton from "./components/buttons/PortfolioButton";
import AboutSection from "./components/AboutSection";
import SocialCluster from "./components/SocialCluster";

export default function Home() {
  return (
    <div className="bg-TAN_D font-mono pt-24 w-screen overflow-hidden pb-24">
      <div className="fjac gap-10 max-[400px]:flex-col">
        <div className="flex flex-col gap-16">
          <div className="max-[400px]:mr-3 max-[400px]:ml-3">
            <Image
              src={profilePhoto}
              alt="An image of Matthew, the developer"
              className="shadow-black shadow-2xl rounded-3xl z-10"
              height={300}
              width={"auto"}
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-OLIVE_T text-center">
              Matthew Ortner
            </h1>
            <div className="text-xl">Full-Stack Developer</div>
            <div className="flex gap-4 items-center">
              <div className="text-3xl">🕺</div>
              <div className="text-l"> Dance to Dev</div>
              <div className="text-3xl">💻</div>
            </div>
          </div>
        </div>
        <DevIconGroup />
      </div>
      <div className="fjac gap-6 m-20 mb-10 max-w-[75%] ml-auto mr-auto max-[600px]:grid">
        <SocialCluster />
        <div className="bg-gray-700 w-[65%] h-[.25rem] m-auto"></div>
        <div className="flex justify-end">
          <PortfolioButton />
        </div>
      </div>
      <AboutSection />
    </div>
  );
}
