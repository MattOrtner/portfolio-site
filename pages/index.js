import Image from "next/image";
import EtsyScreenShot from "../public/EtsyScreenShot.png";
import PortfolioPhoto from "../public/PortfolioPhoto.png";
import ClientAndContactsPNG from "../public/ClientsAndContacts.png";
import HeaderSection from "./components/HeaderSection";
import profilePhoto from "../public/MainPhoto.jpg";
import DevIconGroup from "./components/DevIconGroup";
import AboutSection from "./components/AboutSection";
import SocialCluster from "./components/SocialCluster";
import MyName from "./components/MyName";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="flex font-mono flex-col sm:flex sm:justify-center sm:items-center">
      <Analytics />
      <div className="w-screen bg-gray-200 sm:p-8 max-sm:py-4 max-w-[1500px]">
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
              src={profilePhoto}
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
      <div className="fjac w-screen mt-2 bg-gray-200 sm:p-8 max-sm:flex-col max-sm:py-4 max-w-[1500px]">
        <DevIconGroup />
        <AboutSection />
      </div>
      <div className="w-screen flex-col mt-2 bg-gray-200 gap-2 max-w-[1500px] max-[400px]:h-full">
        <a
          href="https://clients-and-contacts.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" flex gap-6 m-10 justify-end max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2">
            <div className="bg-NAVY text-NAVY_T rounded-xl flex gap-6 flex-col pt-10 pb-20 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first">
              <h1 className="text-3xl">New Leaf</h1>
              <ul className="flex justify-evenly flex-col h-[100%] text-lg">
                <li>React.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Vercel</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <Image
              src={ClientAndContactsPNG}
              alt="Multiple screenshots of the Clients & Contacts project in a grid"
              className="shadow-black shadow-2xl rounded-xl border-blue-950 border-4"
              width={700}
              height={"auto"}
              priority
            />
          </div>
        </a>
        <a
          href="https://staging.d2yhpv0ems9pvt.amplifyapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="m-10 flex gap-6 max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2">
            <Image
              src={EtsyScreenShot}
              alt="A screen shot of Matt's Etsy Clone Project"
              className="shadow-black shadow-2xl rounded-xl border-blue-950 border-4"
              width={700}
              height={"auto"}
              priority
            />{" "}
            <div className="bg-NAVY text-NAVY_T rounded-xl flex gap-6 flex-col pt-10 pb-20 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first">
              <h1 className="text-3xl">A Clone of Etsy</h1>
              <ul className="flex justify-evenly flex-col h-[100%] text-lg">
                <li className="mb-2">React</li>
                <li className="mb-2">React Router</li>
                <li className="mb-2">Styled Components</li>
                <ul>
                  AWS
                  <li>-Amplify</li>
                  <li>-Cloudformation</li>
                  <li>-DynamoDB</li>
                  <li>-AWS SAM</li>
                </ul>
              </ul>
            </div>
          </div>
        </a>
        <div className=" flex gap-6 m-10 justify-end max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2">
          <div className="bg-NAVY text-NAVY_T rounded-xl flex gap-6 flex-col pt-10 pb-20 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first">
            <h1 className="text-3xl">This Portfolio</h1>
            <ul className="flex justify-evenly flex-col h-[100%] text-lg">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Vercel</li>
            </ul>
          </div>
          <Image
            src={PortfolioPhoto}
            alt="A screen shot of his Etsy Clone Project"
            className="shadow-black shadow-2xl rounded-xl border-blue-950 border-4"
            width={700}
            height={"auto"}
            priority
          />
        </div>
      </div>
    </main>
  );
}
