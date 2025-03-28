import Image from "next/image";
import HeaderSection from "./components/HeaderSection";
import profilePhoto from "../public/MainPhoto.jpg";
import DevIconGroup from "./components/DevIconGroup";
import AboutSection from "./components/AboutSection";
import SocialCluster from "./components/SocialCluster";
import MyName from "./components/MyName";
import Projects from "./components/projects";

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
      <Projects />
    </main>
  );
}
