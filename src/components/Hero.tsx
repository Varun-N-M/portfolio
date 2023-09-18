import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

export const Hero = () => {

  const contactScroll = () => {
    const nextSection = document.getElementById("contact");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }

  };

  return (
    <div className=" w-full md:h-screen flex flex-col justify-center items-center max-md:pt-60 pt-28 text-center" id="hero">
      <div className="max-width px-6 py-4 sm:px-16">
        <div className=" flex flex-col gap-5">
          <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-widest">
            Hi, I'm <span className="text-cyan-500/90">Varun</span>
          </h1>
          <h3 className="capitalize text-4xl lg:text-5xl 2xl:text-6xl font-bold">
            Front-end web developer
          </h3>
          <p className="text-2xl max-w-6xl py-2">
            I'm a front-end web developer eager to learn and grow in this field.
            I enjoy creating web applications from the ground up. I'm focused on
            building responsive web-applications
          </p>
        </div>
        <div className="mt-20 w-full flex justify-center items-center gap-16 text-black">
          <a  href="https://www.linkedin.com/in/varun-n-m-242391210" className="social-icons p-6" target="_blank">
            <BiLogoLinkedin size={20}/>
          </a>
          <a href="https://github.com/Varun-N-M" className="social-icons p-6" target="_blank">
            <BiLogoGithub size={20}/>
          </a>
          <a onClick={contactScroll} className="social-icons p-6">
            <BiLogoGmail size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
};
