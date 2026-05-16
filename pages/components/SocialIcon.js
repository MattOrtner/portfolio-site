import Image from "next/image";

const SocialIcon = ({ imageUrl, alt, linkUrl }) => {
  return (
    <a
      href={linkUrl}
      className="cursor-pointer flex min-w-[65px] hover:scale-110 transition-transform duration-200 hover:opacity-80"
    >
      <Image src={imageUrl} alt={alt} width={85} height={85} />
    </a>
  );
};

export default SocialIcon;
