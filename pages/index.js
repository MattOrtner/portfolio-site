import Image from "next/image";
import profilePhoto from "../public/testNumberTwo.jpg";
import DevIconGroup from "./components/DevIconGroup";
import FullStackButton from "./components/buttons/FullStackButton";
import AboutSection from "./components/AboutSection";
import SocialPageBreak from "./components/SocialPageBreak";

export default function Home() {
  return (
    <div className="bg-TAN_D font-mono pt-24 w-screen overflow-hidden pb-10">
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
            <div className="text-xl">from dance to dev</div>
          </div>
        </div>
        <DevIconGroup />
      </div>
      <div className="fjac gap-6 m-20 max-[400px]:grid">
        <SocialPageBreak />
        <div className="bg-gray-700 w-[65%] h-[.25rem] m-auto"></div>
        <div className="flex justify-end">
          <FullStackButton />
        </div>
      </div>
      <AboutSection />
    </div>
  );
}
