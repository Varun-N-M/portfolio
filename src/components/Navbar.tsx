import { useState, Fragment, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";
import { BiLogoLinkedin, BiLogoGmail, BiLogoGithub } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { ToggleButton } from "./ToggleButton";

interface mode {
  setTheme: (theme: string) => void;
  theme: string;
}

export const Navbar = ({ setTheme, theme }: mode) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 40) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollIntoSection = (id: string) => {
    const nextSection = document.getElementById(id);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  const handleClick = () => {
    setNav(true);
  };

  return (
    <header
      className={`w-full fixed z-10 ${shadow ? "shadow-lg" : ""} bg-inherit ${
        theme === "light"
          ? "shadow-gray-500 text-black"
          : "shadow-gray-700 text-white"
      }`}
    >
      <div className="max-width flex flex-row justify-between items-center px-6 py-5 sm:px-16 ">
        <a href="/">
          <img
            src="/logo.svg"
            alt="logo"
            className={`origin-contain w-[140px] h-[40px] ${
              theme === "light" ? "" : "invert"
            }`}
          />
        </a>
        <nav>
          <div>
            <div className="md:flex hidden gap-5 font-semibold">
              {sections.map((section) => (
                <a
                  key={section.id}
                  onClick={() => scrollIntoSection(section.id)}
                  className="bottom-line cursor-pointer"
                >
                  {section.label}
                </a>
              ))}
            </div>
            <div className="md:hidden  duration-200 cursor-pointer flex flex-row gap-4">
              <div
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <ToggleButton theme={theme} />
              </div>

              <div onClick={handleClick} className="hover:scale-110">
                <GiHamburgerMenu size={25} />
              </div>
            </div>
          </div>
        </nav>

        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="hidden md:flex cursor-pointer duration-200"
        >
          <ToggleButton theme={theme} />
        </div>

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
                  <Dialog.Panel
                    className={`relative w-full h-full  flex flex-col justify-between px-6 py-5 text-black ${
                      theme === "light"
                        ? "bg-[#eef6fd]"
                        : "bg-[#081B33] text-white "
                    }`}
                  >
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src="/logo.svg"
                        alt="logo"
                        className={`w-[100px] h-[30px] ${
                          theme === "light" ? "" : "invert"
                        }`}
                      />
                      <div
                        className="social-icons p-3 cursor-pointer text-black"
                        onClick={() => setNav(false)}
                      >
                        <AiOutlineClose />
                      </div>
                    </div>
                    <div className="flex flex-col tracking-wide gap-5">
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          onClick={() => scrollIntoSection(section.id)}
                          className="cursor-pointer text-[17px]"
                        >
                          {section.label}
                        </a>
                      ))}
                    </div>
                    <div className="mb-16 flex flex-col gap-5 ">
                      <p>Let's connect</p>
                      <div className="flex flex-row justify-around items-center text-black">
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
