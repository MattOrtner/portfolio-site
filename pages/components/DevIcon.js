import Image from "next/image";

const DevIcon = ({ url, alt }) => {
  return (
    <div
      className="rounded-xl p-1  bg-slate-200 hover:grayscale"
      style={{ boxShadow: "inset 0 0 5px #4D4D4D, 2px 2px 5px #4D4D4D" }}
    >
      <Image src={url} alt={alt} width={100} height={100} />
    </div>
  );
};

export default DevIcon;
