import SocialIcon from "./SocialIcon";

const SocialPageBreak = () => {
  return (
    <div className="flex gap-7 justify-around max-width-6xl max-[400px]:w-[250px]">
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
export default SocialPageBreak;
