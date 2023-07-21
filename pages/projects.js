import Image from "next/image";
import NavBar from "./components/NavBar";
import EtsyScreenShot from "../public/EtsyScreenShot.png";
import PortfolioPhoto from "../public/PortfolioPhoto.png";

const Projects = () => {
  return (
    <div className="h-[100%] w-screen bg-TAN_D font-mono flex items-center flex-col gap-2">
      <div className="w-[100%] flex justify-end mr-96">
        <NavBar />
      </div>
      <div className="p-10 flex gap-14">
        <Image
          src={EtsyScreenShot}
          alt="A screen shot of his Etsy Clone Project"
          className="shadow-black shadow-2xl rounded-3xl"
          width={650}
          height={"auto"}
          priority
        />
        <div className="bg-NAVY text-NAVY_T rounded-2xl flex gap-6 flex-col pt-10 pr-20 pb-20 pl-20">
          <h1 className="text-3xl flex-1 grow">Etsy Clone</h1>
          <ul className="flex justify-evenly flex-col h-[100%] text-lg">
            <li>React</li>
            <li>React Router</li>
            <li>Styled Components</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div className="p-10 flex gap-14">
        <div className="bg-NAVY text-NAVY_T rounded-2xl flex gap-6 flex-col pt-10 pr-20 pb-20 pl-20">
          <h1 className="text-3xl flex-1 grow">This Site</h1>
          <ul className="flex justify-evenly flex-col h-[100%] text-lg">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Vercel</li>
          </ul>
        </div>
        <Image
          src={PortfolioPhoto}
          alt="A screen shot of his Etsy Clone Project"
          className="shadow-black shadow-2xl rounded-3xl"
          width={650}
          height={"auto"}
          priority
        />
      </div>
    </div>
  );
};

export default Projects;
