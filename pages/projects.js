import Image from "next/image";
import NavBar from "./components/NavBar";
import EtsyScreenShot from "../public/EtsyScreenShot.png";
import PortfolioPhoto from "../public/PortfolioPhoto.png";

const Projects = () => {
  return (
    <div className="p-4 w-screen bg-TAN_D font-mono flex items-center flex-col gap-2 max-[400px]:h-full">
      <div className="w-[100%] flex justify-end mr-96">
        <NavBar />
      </div>
      <div className="flex gap-14 max-[400px]:grid max-[400px]:p-3 max-[400px]:gap-2">
        <Image
          src={EtsyScreenShot}
          alt="A screen shot of his Etsy Clone Project"
          className="shadow-black shadow-2xl rounded-3xl"
          width={650}
          height={"auto"}
          priority
        />
        <div
          className="bg-NAVY text-NAVY_T rounded-2xl flex gap-6 flex-col
                        pt-10 pb-20 px-20 max-[400px]:px-5 max-[400px]:py-5
                        max-[400px]:order-first"
        >
          <h1 className="text-3xl">A Clone of Etsy</h1>
          <ul className="flex justify-evenly flex-col h-[100%] text-lg">
            <li>React</li>
            <li>React Router</li>
            <li>Styled Components</li>
            <li>
              AWS
              <li>-Amplify</li>
              <li>-Cloudformation</li>
              <li>-DynamoDB</li>
              <li>-AWS SAM</li>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-10 flex gap-14 max-[400px]:grid max-[400px]:p-3 max-[400px]:gap-2">
        <div
          className="bg-NAVY text-NAVY_T rounded-2xl flex gap-6 flex-col
                        pt-10 pr-20 pb-20 pl-20 max-[400px]:p-2"
        >
          <h1 className="text-3xl">This Site</h1>
          <ul className="flex justify-evenly flex-col h-[100%] text-lg">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Vercel</li>
          </ul>
        </div>
        <Image
          src={PortfolioPhoto}
          alt="A screen shot of his Etsy Clone Project"
          className="shadow-black shadow-2xl rounded-3xl "
          width={650}
          height={"auto"}
          priority
        />
      </div>
    </div>
  );
};

export default Projects;
