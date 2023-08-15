const AboutSection = () => {
  return (
    <div className="fjac w-full">
      <div className="flex gap-16 justify-center w-[75%] max-[400px]:w-[100%]">
        <div
          className="flex  w-[50%] items-end justify-center flex-col z-10 
          gap-10 font-mono max-[900px]:w-[100%] max-[400px]:items-center
          max-[400px]:gap-4 max-[400px]:hidden"
        >
          <div
            className="w-[50%] text-center bg-slate-500 p-4 shadow-xl
            shadow-black rounded-md max-[400px]:w-[75%]"
          >
            I love to create.
          </div>
          <div
            className="w-[80%] bg-slate-400 p-4 text-center shadow-lg shadow-black 
            rounded-md max-[400px]:w-[85%]"
          >
            Watching an idea evolve from inception to completion is incredibly
            fullfilling.
          </div>
          <div
            className="w-[60%] text-center bg-slate-300 p-4 shadow-md shadow-black
            rounded-md max-[400px]:w-[95%]"
          >
            I love it.
          </div>
        </div>
        <div className="w-[90%]  flex justify-center items-center">
          <div>
            As a web developer and passionate dancer, I bring a unique
            perspective to my work. <br /> <br /> My background in dance has
            instilled in me a love for creativity, attention to detail,
            collaboration, and discipline, which I carry over into my career as
            a web developer.
            <br /> <br /> I am a creative problem-solver who is always eager to
            learn new techniques and technologies. If you are looking for a web
            developer who brings a unique perspective and a passion for creating
            high-quality web solutions, please feel free to contact me.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
