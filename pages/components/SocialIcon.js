import Image from "next/image";

const SocialIcon = ({ imageUrl, alt, linkUrl }) => {
  return (
    <a href={linkUrl} className="curser-pointer">
      <Image src={imageUrl} alt={alt} width={50} height={50} />
    </a>
  );
};

export default SocialIcon;
