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
        <div className="flex flex-col gap-16">
          <div className="fjac">
            <Image
              src={profilePhoto}
              alt="An image of Matthew Ortner"
              className="rounded-l-[36px] shadow-black shadow-2xl"
              height={300}
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-OLIVE_T text-center rounded-l-[36px]">
              Matthew Ortner
            </h1>
            <div
              className="bg-NAVY p-4 text-lg text-NAVY_T text-center border-4 border-BLUE_T 
                border-double rounded-l-[36px] shadow-black shadow-md"
            >
              Full-Stack Developer
            </div>
          </div>
        </div>
        <DevIconGroup />
      </div>
    </div>
  );
}
