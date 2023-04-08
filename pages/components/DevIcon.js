import Image from "next/image";

const DevIcon = ({ url, alt }) => {
  return (
    <div className="shadow-black shadow-lg rounded-xl hover:grayscale">
      <div
        className="bg-slate-200 p-4 rounded-xl"
        style={{ boxShadow: "inset 0 0 10px #4D4D4D" }}
      >
        <Image src={url} alt={alt} width={100} height={100} />
      </div>
    </div>
  );
};

export default DevIcon;
