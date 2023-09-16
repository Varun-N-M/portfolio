import { useState, Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";
import { BiLogoLinkedin, BiLogoGmail, BiLogoGithub } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const homeScroll = () => {
    const nextSection = document.getElementById("hero");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };
  const aboutScroll = () => {
    const nextSection = document.getElementById("about");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };
  const projectsScroll = () => {
    const nextSection = document.getElementById("projects");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  const skillsScroll = () => {
    const nextSection = document.getElementById("skills");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };
  const contactScroll = () => {
    const nextSection = document.getElementById("contact");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  const handleClick = () => {
    setNav(true);
  };

  return (
    <header className="w-full fixed z-10 bg-[#f8fdff] shadow-lg shadow-gray-200">
      <div className="max-width flex flex-row justify-between items-center px-6 py-5 sm:px-16 ">
        <a href="/">
          <img
            src="/logo.svg"
            alt="logo"
            className="origin-contain w-[140px] h-[40px]"
          />
        </a>
        <nav>
          <div>
            <div className="md:flex hidden gap-5 font-semibold">
              <a onClick={homeScroll} className="bottom-line cursor-pointer">
                Home
              </a>
              <a onClick={aboutScroll} className="bottom-line cursor-pointer">
                About
              </a>
              <a onClick={skillsScroll} className="bottom-line cursor-pointer">
                Skills
              </a>
              <a
                onClick={projectsScroll}
                className="bottom-line cursor-pointer"
              >
                Projects
              </a>
              <a onClick={contactScroll} className="bottom-line cursor-pointer">
                Contact
              </a>
            </div>
            <div
              className="md:hidden hover:scale-110 duration-200 cursor-pointer"
              onClick={handleClick}
            >
              <GiHamburgerMenu size={25} />
            </div>
          </div>
        </nav>
        <Transition appear show={nav} as={Fragment}>
          <Dialog
            as="div"
            onClose={() => setNav(false)}
            className="relative z-10 md:hidden"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0">
              <div className="h-screen w-[60%] md:w-[50%] left-0 top-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-out duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative w-full h-full bg-[#f8fdff] flex flex-col justify-between px-6 py-5">
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src="/logo.svg"
                        alt="logo"
                        className="origin-contain w-[100px] h-[30px]"
                      />
                      <div
                        className="social-icons p-3 cursor-pointer"
                        onClick={() => setNav(false)}
                      >
                        <AiOutlineClose />
                      </div>
                    </div>
                    <div className="flex flex-col text-gray-600 tracking-wide gap-5">
                      <a onClick={homeScroll} className="cursor-pointer">
                        Home
                      </a>
                      <a onClick={aboutScroll} className="cursor-pointer">
                        About
                      </a>
                      <a onClick={skillsScroll} className="cursor-pointer">
                        Skills
                      </a>
                      <a onClick={projectsScroll} className="cursor-pointer">
                        Projects
                      </a>
                      <a onClick={contactScroll} className="cursor-pointer">
                        Contact
                      </a>
                    </div>
                    <div className="mb-16 flex flex-col gap-5 ">
                      <p>Let's connect</p>
                      <div className="flex flex-row justify-around items-center">
                        <a
                          href="https://www.linkedin.com/in/varun-n-m-242391210"
                          target="_blank"
                          className="social-icons p-4 outline-none"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="https://github.com/Varun-N-M"
                          target="_blank"
                          className="social-icons p-4"
                        >
                          <BiLogoGithub />
                        </a>
                        <a href="/" className="social-icons p-4">
                          <BiLogoGmail />
                        </a>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </header>
  );
};
