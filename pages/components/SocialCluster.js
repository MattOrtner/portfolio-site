import SocialIcon from "./SocialIcon";

const SocialCuster = () => {
  return (
    <div className="flex flex-col justify-around gap-8 max-sm:flex-row max-sm:justify-center max-sm:pt-4 ">
      <SocialIcon
        imageUrl={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        }
        linkUrl={"https://github.com/MattOrtner"}
        alt={"GitHub Icon and Link"}
      />
      <SocialIcon
        imageUrl={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        }
        linkUrl={"https://www.linkedin.com/in/matthewortner/"}
        alt={"LinkedIn Icon and Link"}
      />
    </div>
  );
};
export default SocialCuster;
