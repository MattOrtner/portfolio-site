import Image from "next/image";
import PomoDashboard from "../public/PomoDashboard.png";
import PortfolioPhoto from "../public/PortfolioPhoto.png";
import MainPhoto from "../public/MainPhoto.jpg";
import ClientAndContactsPNG from "../public/ClientsAndContacts.png";
import PhotoDream from "../public/PhotoDream.png";
import HeaderSection from "./components/HeaderSection";
import DevIconGroup from "./components/DevIconGroup";
import AboutSection from "./components/AboutSection";
import SocialCluster from "./components/SocialCluster";
import MyName from "./components/MyName";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="flex font-mono flex-col sm:flex sm:justify-center sm:items-center">
      <Analytics />
      <div className="w-screen bg-gradient-to-br from-slate-50 to-indigo-50 sm:p-8 max-sm:py-4 max-w-[1500px]">
        <HeaderSection />
        <div className="flex justify-around pb-4 max-[400px]:w-[100%] max-md:flex-col">
          <div className="fjac flex-col items-center gap-4 pt-4">
            <MyName />
            <div className="text-xl">Full-Stack Developer</div>
            <div className="flex gap-4 items-center">
              <div className="text-3xl">🕺</div>
              <div className="text-l"> Dance to Dev</div>
              <div className="text-3xl">💻</div>
            </div>
          </div>
          <div className="flex justify-center items-center max-[400px]:w-[80%] max-[400px]:mx-auto max-[400px]:my-2">
            <Image
              src={MainPhoto}
              alt="An image of Matthew, the developer"
              className="shadow-black shadow-xl rounded-xl z-10"
              height={300}
              width={"auto"}
              priority={true}
            />
          </div>
          <SocialCluster />
        </div>
      </div>
      <div className="fjac w-screen mt-2 bg-gradient-to-br from-blue-50 to-slate-100 sm:p-8 max-sm:flex-col max-sm:py-4 max-w-[1500px]">
        <DevIconGroup />
        <AboutSection />
      </div>
      <div className="w-screen flex-col mt-2 bg-gradient-to-b from-slate-50 to-blue-50 gap-2 max-w-[1500px] max-[400px]:h-full">
        <a
          href="https://clients-and-contacts.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className=" flex gap-6 m-10 justify-end max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2 transition-all duration-300 group-hover:-translate-y-2">
            <div className="bg-NAVY text-NAVY_T rounded-xl flex gap-6 flex-col pt-10 pb-10 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first justify-between">
              <div>
                <h1 className="text-2xl mb-4">New Leaf</h1>
                <ul className="flex flex-col gap-2 text-md">
                  <li>React.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Vercel</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-right">
                View Project →
              </p>
            </div>
            <Image
              src={ClientAndContactsPNG}
              alt="Multiple screenshots of the Clients & Contacts project in a grid"
              className="shadow-black shadow-2xl rounded-xl border-blue-950 border-4"
              width={700}
              style={{ height: "400px", objectFit: "cover" }}
              // height={"auto"}
              priority
            />
          </div>
        </a>
        <a
          href="https://photo-dream.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="m-10 flex gap-6 max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2 transition-all duration-300 group-hover:-translate-y-2">
            <Image
              src={PhotoDream}
              alt="Multiple screenshots of the Clients & Contacts project in a grid"
              className="shadow-black shadow-2xl rounded-xl border-blue-950 border-4"
              width={700}
              height={"auto"}
              priority
            />
            <div className="bg-NAVY text-NAVY_T rounded-xl flex gap-6 flex-col pt-10 pb-10 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first justify-between">
              <div>
                <h1 className="text-2xl mb-4">Photo Dreams</h1>
                <ul className="flex flex-col gap-2 text-md">
                  <li>Unsplash API</li>
                  <li>HTML / CSS / Javascript</li>
                  <li>Express</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-right">
                View Project →
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://productive-pomo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className=" flex gap-6 m-10 justify-end max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2 transition-all duration-300 group-hover:-translate-y-2">
            <div className="bg-NAVY text-NAVY_T rounded-xl flex gap-6 flex-col pt-10 pb-10 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first justify-between">
              <div>
                <h1 className="text-2xl mb-4">Productive Pomodoro</h1>
                <ul className="flex flex-col gap-2 text-md">
                  <li>React</li>
                  <li>Github Copilot: Claude Sonnet 4.5</li>
                  <li>dnd-kit</li>
                </ul>
              </div>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-right">
                View Project →
              </p>
            </div>
            <Image
              src={PomoDashboard}
              alt="A screen shot of Matt's Etsy Clone Project"
              className="shadow-black shadow-2xl rounded-xl border-blue-950 border-x-4"
              width={700}
              height={"auto"}
              priority
            />
          </div>
        </a>
        <div className="m-10 flex gap-6 max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2">
          <Image
            src={PortfolioPhoto}
            alt="A screen shot of his Etsy Clone Project"
            className="shadow-black shadow-2xl rounded-xl border-blue-950 border-4"
            width={700}
            height={"auto"}
            priority
          />
          <div className="bg-NAVY text-NAVY_T rounded-xl flex gap-6 flex-col pt-10 pb-20 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first">
            <h1 className="text-2xl">This Portfolio</h1>
            <ul className="flex justify-evenly flex-col h-[100%] text-md">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
