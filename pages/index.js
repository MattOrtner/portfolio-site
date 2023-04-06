import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import profilePhoto from "../public/testNumbertwo.png";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function Home() {
  const [something, setSomething] = useState("Matthew Ortner");
  return (
    <div className="flex h-screen w-screen flex-col pt-10 px-20 bg-TANL font-mono ">
      <NavBar />
      <div className="w-srceen h-96 flex mt-5">
        <div className="flex-1 flex justify-between flex-col">
          <div className="flex justify-end bg-slate-100">
            <h1 className="text-6xl p-10 bg-blue-300">{something}</h1>
          </div>
          <div className="flex justify-end items-center bg-NAVY text-3xl text-NAVY_T pr-10">
            Full-Stack Developer
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={profilePhoto}
            alt="An image of Matthew Ortner"
            style={{ width: 520, borderRadius: 75 }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
