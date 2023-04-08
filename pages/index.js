import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import profilePhoto from "../assets/testNumberTwo.jpg";
import NavBar from "./components/NavBar";
import SocialIcon from "./components/SocialIcon";
import DevIconGroup from "./components/DevIconGroup";

export default function Home() {
  return (
    <div className=" flex-col h-screen fjac gap-10 bg-TAN_D font-mono">
      <NavBar />
      <div className="flex gap-16">
        <div className="fjac">
          <Image
            src={profilePhoto}
            alt="An image of Matthew Ortner"
            className="rounded-full shadow-black shadow-2xl"
            style={{ width: "100%" }}
            priority
          />
        </div>
        <div className="fjac flex-col gap-8">
          <h1 className="text-3xl text-OLIVE_T rounded-l-[36px]">
            Matthew Ortner
          </h1>
          <div
            className="bg-NAVY p-4 text-lg text-NAVY_T border-4 border-BLUE_T 
                border-double rounded-l-[36px] shadow-black shadow-md"
          >
            Full-Stack Developer
          </div>
        </div>
        <DevIconGroup />
      </div>
    </div>
  );
}
