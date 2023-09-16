export const Skills = () => {
  return (
    <div
      className="w-full h-screen max-md:h-fit flex justify-start items-start max-md:pt-36 pt-28"
      id="skills"
    >
      <div className="max-width h-full px-6 py-5 sm:px-16 ">
        <h1 className="text-5xl font-bold">Skills</h1>
        <div className="h-[60%] grid lg:grid-cols-4 max-sm:grid-cols-1 grid-cols-2 gap-8 lg:max-w-full mt-20">
          <div className="skills-container">
            <img src="/html.png" alt="html" />
            <h3>HTML</h3>
          </div>
          <div className="skills-container">
            <img src="/css.png" alt="css" />
            <h3>CSS</h3>
          </div>
          <div className="skills-container">
            <img src="/javascript.png" alt="js" />
            <h3>Javascript</h3>
          </div>
          <div className="skills-container">
            <img src="/react.png" alt="react" />
            <h3>ReactJs</h3>
          </div>
          <div className="skills-container">
            <img src="/firebase.png" alt="firebase" />
            <h3>Firebase</h3>
          </div>
          <div className="skills-container">
            <img src="/tailwind.png" alt="tailwind" />
            <h3>Tailwind CSS</h3>
          </div>
          <div className="skills-container">
            <img src="/nextjs.png" alt="next" />
            <h3>NextJs</h3>
          </div>
          <div className="skills-container">
            <img src="/typescript.png" alt="ts" />
            <h3>Typescript</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
