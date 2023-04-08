import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import profilePhoto from "../assets/testNumberTwo.jpg";
import NavBar from "./components/NavBar";
import SocialIcon from "./components/SocialIcon";
import DevIconGroup from "./components/DevIconGroup";

export default function Home() {
  return (
    <div className="h-screen bg-TAN_D font-mono">
      <div className="h-96">
        <NavBar />
      </div>
      <div className="fjac gap-10">
        <div className="flex flex-col ml-28 gap-16">
          <div className="fjac">
            <Image
              src={profilePhoto}
              alt="An image of Matthew Ortner"
              className="rounded-[36px] shadow-black shadow-2xl"
              height={300}
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-start pl-3">
              <h1 className="text-3xl text-OLIVE_T text-center">
                Matthew Ortner
              </h1>
            </div>
            <div className="flex justify-end p-4">
              <div
                className="bg-NAVY p-4 text-lg text-NAVY_T text-center 
              border-b-8 border-r-8 border-double border-NAVY_T cursor-pointer
              shadow-black shadow-lg w-[75%] rounded-2xl  hover:border-b-0 hover:mb-8
              hover:border-r-0 hover:rounded-none transition-all duration-100 ease-linear"
              >
                Full-Stack Developer
              </div>
            </div>
          </div>
        </div>
        <DevIconGroup />
      </div>
      <div className="fjac mt-32 gap-7">
        <SocialIcon
          imageUrl={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          }
          linkUrl={"https://github.com/MattOrtner"}
          alt={"GitHub Icon and Link"}
        />
        <SocialIcon
          imageUrl={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          }
          linkUrl={"https://www.linkedin.com/in/matthewortner/"}
          alt={"LinkedIn Icon and Link"}
        />
      </div>
    </div>
  );
}
