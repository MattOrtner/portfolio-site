const AboutSection = () => {
  return (
    <div className="fjac w-full">
      <div className="max-[400px]:text-center max-[400px]:m-4">
        <div>
          <p>
            As a web developer and passionate dancer, I bring a unique
            perspective to my work. Instilled in me is a love for:
          </p>
          <br />
          <ol>
            <li>Attention to detail</li>
            <li>Creativity</li>
            <li>Collaboration</li>
            <li>Communication</li>
            <li>Curiosity</li>
            <li>Discipline</li>
          </ol>
          <br />
          <p>
            These qualities carry over into my career as a web developer. I
            strive to create beautiful, functional, and user-friendly web
            applications that meet the needs of my clients and their users. I am
            constantly learning and growing, always seeking out new challenges
            and opportunities to expand my skill set.
          </p>
          <br />
          <p>
            Feel free to reach out if you are looking for a dedicated developer
            to join your team or even just to grab a coffee and chat, maybe
            OneWheel? Please reach out.{" "}
            <a
              href="https://www.linkedin.com/in/matthewortner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-green-700 transition duration-300"
            >
              LinkedIn
            </a>
            .
          </p>
          <br />
          <p>Hope you are having a great day!</p>
          <p>- Matt</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
