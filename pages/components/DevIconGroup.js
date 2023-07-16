import DevIcon from "./DevIcon";

const DevIconGroup = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-[400px]:flex-col max-[400px]:grid-cols-2 max-[400px]:w-auto">
      <DevIcon
        url={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }
        alt={"Javascript Icon"}
      />
      <DevIcon
        url={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        }
        alt={"React Icon"}
      />
      <DevIcon
        url={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        }
        alt={"Next.js Icon"}
      />
      <DevIcon
        url={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        }
        alt={"Node Icon"}
      />
      <DevIcon
        url={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        }
        alt={"MongoDB Icon"}
      />
      <DevIcon
        url={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        }
        alt={"Tailwind CSS Icon"}
      />
      <DevIcon
        url={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        }
        alt={"GIT Icon"}
      />
    </div>
  );
};
export default DevIconGroup;
