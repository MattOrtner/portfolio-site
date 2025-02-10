import Image from "next/image";
import HeaderSection from "./components/HeaderSection";
import profilePhoto from "../public/MainPhoto.jpg";
import DevIconGroup from "./components/DevIconGroup";
import AboutSection from "./components/AboutSection";
import SocialCluster from "./components/SocialCluster";
import NavButton from "./components/buttons/NavButton";
import MyName from "./components/MyName";

export default function Home() {
  return (
    <main className="h-screen sm:flex sm:justify-center sm:items-center">
      <div className="max-w-[1100px] bg-gray-200 rounded-lg sm:p-8">
        <HeaderSection />
        <div className="font-mono">
          <div className="flex justify-around  max-[400px]:w-[100%] max-md:flex-col">
            <div className="p-4">
              <Image
                src={profilePhoto}
                alt="An image of Matthew, the developer"
                className="shadow-black shadow-xl rounded-xl z-10"
                height={300}
                width={"auto"}
                priority={true}
              />
            </div>
            <div className="fjac flex-col items-center gap-4 pt-4">
              <MyName />
              <div className="text-xl">Full-Stack Developer</div>
              <div className="flex gap-4 items-center">
                <div className="text-3xl">🕺</div>
                <div className="text-l"> Dance to Dev</div>
                <div className="text-3xl">💻</div>
              </div>
              <NavButton href={"/projects/"} buttonText={"Portfolio"} />
            </div>
            <SocialCluster />
          </div>
          <div className="fjac max-sm:flex-col max-sm:py-4">
            <DevIconGroup />
            <AboutSection />
          </div>
        </div>
      </div>
    </main>
  );
}
