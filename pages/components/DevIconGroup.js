import DevIcon from "./DevIcon";

const DevIconGroup = () => {
  return (
    <div className="fjac w-full">
      <div className="inline-grid grid-cols-3 gap-4">
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
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          }
          alt={"Amazon Web Services Icon"}
        />
        <DevIcon
          url={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          }
          alt={"MongoDB Icon"}
        />
        <DevIcon
          url={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          }
          alt={"Express Icon"}
        />
        <DevIcon
          url={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
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
    </div>
  );
};
export default DevIconGroup;
