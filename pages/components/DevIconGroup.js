import DevIcon from "./DevIcon";

const DevIconGroup = () => {
  return (
    <div className="flex-3 grid grid-cols-2 gap-3">
      <div>
        <DevIcon
          url={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          }
          alt={"Javascript Icon"}
        />
        <DevIcon
          url={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          }
          alt={"Node Icon"}
        />
        <DevIcon
          url={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          }
          alt={"Next.js Icon"}
        />
      </div>
      <div className="gap-1 border-b-indigo-500">
        <DevIcon
          url={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          }
          alt={"React Icon"}
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
      </div>
    </div>
  );
};
export default DevIconGroup;