import Image from "next/image";
import EtsyScreenShot from "../public/EtsyScreenShot.png";
import PortfolioPhoto from "../public/PortfolioPhoto.png";
import HeaderSection from "./components/HeaderSection";
import profilePhoto from "../public/MainPhoto.jpg";
import DevIconGroup from "./components/DevIconGroup";
import AboutSection from "./components/AboutSection";
import SocialCluster from "./components/SocialCluster";
import MyName from "./components/MyName";

export default function Home() {
  return (
    <main className="flex font-mono flex-col sm:flex sm:justify-center sm:items-center">
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
        <div className="m-10 flex gap-6 max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2">
          <div className="bg-NAVY text-NAVY_T rounded-2xl flex gap-6 flex-col pt-10 pb-20 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first">
            <h1 className="text-3xl">A Clone of Etsy</h1>
            <ul className="flex justify-evenly flex-col h-[100%] text-lg">
              <li>React</li>
              <li>React Router</li>
              <li>Styled Components</li>
              <ul>
                AWS
                <li>-Amplify</li>
                <li>-Cloudformation</li>
                <li>-DynamoDB</li>
                <li>-AWS SAM</li>
              </ul>
            </ul>
          </div>
          <a
            href="https://staging.d2yhpv0ems9pvt.amplifyapp.com"
            className="flex max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2"
          >
            <Image
              src={EtsyScreenShot}
              alt="A screen shot of Matt's Etsy Clone Project"
              className="shadow-black shadow-2xl rounded-3xl border-blue-950 border-4"
              width={700}
              height={"auto"}
              priority
            />
          </a>
        </div>
        <div className=" flex gap-6 m-10 justify-end max-[400px]:grid max-[400px]:m-3 max-[400px]:gap-2">
          <div className="bg-NAVY text-NAVY_T rounded-2xl flex gap-6 flex-col pt-10 pb-20 px-20 max-[400px]:px-5 max-[400px]:py-5 max-[400px]:order-first">
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
            className="shadow-black shadow-2xl rounded-3xl border-blue-950 border-4"
            width={700}
            height={"auto"}
            priority
          />
        </div>
      </div>
    </main>
  );
}
