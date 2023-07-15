import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import profilePhoto from "../public/testNumberTwo.jpg";
import SocialIcon from "./components/SocialIcon";
import DevIconGroup from "./components/DevIconGroup";
import FullStackButton from "./components/buttons/FullStackButton";
import AboutSection from "./about";

export default function Home() {
  return (
    <div className=" bg-TAN_D font-mono pt-24">
      <div className="fjac w-full gap-10">
        <div className="flex flex-col gap-16">
          <Image
            src={profilePhoto}
            alt="An image of Matthew, the developer"
            className="shadow-black shadow-2xl rounded-3xl z-10"
            height={300}
            style={{ zIndex: "3" }}
            priority
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-OLIVE_T text-center">
              Matthew Ortner
            </h1>
          </div>
        </div>
        <DevIconGroup />
      </div>
      <div className="fjac gap-6 m-20 ">
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
        <div
          style={{
            backgroundColor: "gray",
            width: "65%",
            height: ".25rem",
          }}
        ></div>
        <div className="flex justify-end">
          <FullStackButton />
        </div>
      </div>
      <AboutSection />
    </div>
  );
}
