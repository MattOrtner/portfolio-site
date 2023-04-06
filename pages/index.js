import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import profilePhoto from "../public/testNumbertwo.png";
import profilePhoto from "../public/testNumberTwo.jpg";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function Home() {
  const [something, setSomething] = useState("Matthew Ortner");
  return (
    <div className="flex h-screen w-screen flex-col pt-10 px-20 bg-TAN_D font-mono">
      <NavBar />
      <div className="w-srceen h-96 flex mt-5">
        <div className="flex-1 flex justify-between flex-col">
          <div className="flex justify-end bg-amber-700 z-10 shadow-black shadow-sm">
            <h1
              className="text-6xl origin-bottom-right -rotate-12 bg-OLIVE 
            p-10 text-OLIVE_T z-10 rounded-l-[36px] shadow-black shadow-lg"
            >
              {something}
            </h1>
          </div>
          <div className="bg-amber-700 shadow-black shadow-sm">
            <div
              className="flex justify-end items-center gap-1 origin-top-right 
          rotate-12 bg-NAVY text-3xl text-NAVY_T pr-10 border-8 border-BLUE_T 
          border-double rounded-l-[36px] shadow-black shadow-md"
            >
              Full-Stack Developer
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={profilePhoto}
            alt="An image of Matthew Ortner"
            className="rounded-l-3xl shadow-2xl cursor-pointer grayscale shadow-black
            hover:grayscale-0 transition-all duration-00 ease-in-out"
            style={{ width: 520 }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
