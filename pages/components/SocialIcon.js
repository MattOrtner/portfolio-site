import Image from "next/image";

const SocialIcon = ({ imageUrl, alt, linkUrl }) => {
  return (
    <a href={linkUrl} className="curser-pointer flex min-w-[65px]">
      <Image src={imageUrl} alt={alt} width={85} height={85} />
    </a>
  );
};

export default SocialIcon;
