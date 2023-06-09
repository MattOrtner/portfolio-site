import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import profilePhoto from "../public/testNumberTwo.jpg";
import NavBar from "./components/NavBar";
import SocialIcon from "./components/SocialIcon";
import DevIconGroup from "./components/DevIconGroup";
import FullStackButton from "./components/buttons/FullStackButton";

export default function Home() {
  return (
    <div className="h-screen bg-TAN_D font-mono">
      <div className="">
        <NavBar />
      </div>
      <div className="fjac gap-10">
        <div className="flex flex-col ml-28 gap-16">
          <div className="fjac">
            <Image
              src={profilePhoto}
              alt="An image of Matthew, the developer"
              className="shadow-black shadow-2xl z-10"
              height={300}
              style={{ zIndex: "3" }}
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
              <FullStackButton />
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
