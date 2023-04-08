import Image from "next/image";

const SocialIcon = ({ url, alt }) => {
  return <Image src={url} alt={alt} width={50} height={50} />;
};

export default SocialIcon;
