export const About = () => {
  return (
    <div
      className="w-full h-screen max-sm:h-fit flex justify-start items-start flex-wrap max-md:pt-36 pt-28"
      id="about"
    >
      <div className="max-width px-6 py-5 sm:px-16 flex flex-col justify-between">
        <h1 className="text-5xl font-bold">About me</h1>
        <p className="mt-10 text-xl md:max-w-6xl py-2 tracking-widest">
          I'm a self-taught front-end web developer with a passion for crafting
          web applications from the ground up. In just four months of dedicated
          learning, I've immersed myself in the world of web development. As a
          fresher in the field, I'm excited about the opportunity to contribute
          and create engaging online experiences.
          <br />
          <br />
          My journey in web development has been driven by a deep curiosity and
          a desire to continuously learn and grow. Building web applications
          from scratch allows me to apply my creativity and problem-solving
          skills, and I find immense satisfaction in turning ideas into
          functional, user-friendly interfaces. I'm eager to take on new
          challenges and make a meaningful impact in the ever-evolving landscape
          of web development.
        </p>
        <div className="mt-10">
          <a href="/" className="underline">
            Check out some of my latest project
          </a>
        </div>
      </div>
    </div>
  );
};
