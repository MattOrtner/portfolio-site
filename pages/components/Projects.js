import Image from "next/image";
import EtsyScreenShot from "../../public/EtsyScreenShot.png";
import PortfolioPhoto from "../../public/PortfolioPhoto.png";

const Projects = () => {
  return (
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
  );
};

export default Projects;
