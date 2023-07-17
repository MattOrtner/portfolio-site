import Image from "next/image";

const SocialIcon = ({ imageUrl, alt, linkUrl }) => {
  return (
    <a href={linkUrl} className="curser-pointer min-w-[65px]">
      <Image src={imageUrl} alt={alt} width={75} height={75} />
    </a>
  );
};

export default SocialIcon;
