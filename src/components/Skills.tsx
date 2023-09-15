export const Skills = () => {
  return (
    <div className="w-full h-screen max-md:h-fit flex justify-start items-start max-md:pt-36 pt-28">
      <div className="max-width px-6 py-5 sm:px-16 ">
        <h1 className="text-5xl font-bold">Skills</h1>
        <div className="grid xl:grid-cols-4 max-sm:grid-cols-1 grid-cols-2 gap-8 w-full mt-10">
          <div className="skills-container">
            <img src="public/html.png" alt="html" className="" />
            <h3>HTML</h3>
          </div>
          <div className="skills-container">
            <img src="public/css.png" alt="css" className="" />
            <h3>CSS</h3>
          </div>
          <div className="skills-container">
            <img src="public/javascript.png" alt="html" className="" />
            <h3>Javascript</h3>
          </div>
          <div className="skills-container">
            <img src="public/react.png" alt="html" className="" />
            <h3>ReactJs</h3>
          </div>
          <div className="skills-container">
            <img src="public/firebase.png" alt="html" className="" />
            <h3>Firebase</h3>
          </div>
          <div className="skills-container">
            <img src="public/tailwind.png" alt="html" className="" />
            <h3>Tailwind CSS</h3>
          </div>
          <div className="skills-container">
            <img src="public/nextjs.png" alt="html" className="" />
            <h3>NextJs</h3>
          </div>
          <div className="skills-container">
            <img src="public/typescript.png" alt="html" className="" />
            <h3>Typescript</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
