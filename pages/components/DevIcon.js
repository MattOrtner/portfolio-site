import Image from "next/image";

const DevIcon = ({ url, alt }) => {
  return (
    <div className="fjac">
      <Image src={url} alt={alt} width={100} height={100} />
    </div>
  );
};

export default DevIcon;
