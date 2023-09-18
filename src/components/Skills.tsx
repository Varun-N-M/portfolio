export const Skills = () => {

  const skillsData = [
    { id: 1, name: 'HTML', image: '/html.png', alt: 'html' },
    { id: 2, name: 'CSS', image: '/css.png', alt: 'css' },
    { id: 3, name: 'JavaScript', image: '/javascript.png', alt: 'js' },
    { id: 4, name: 'ReactJs', image: '/react.png', alt: 'react' },
    { id: 5, name: 'Python', image: '/python.png', alt: 'python' },
    { id: 6, name: 'MySql', image: '/mysql.png', alt: 'mysql' },
    { id: 7, name: 'Firebase', image: '/firebase.png', alt: 'firebase' },
    { id: 8, name: 'Tailwind CSS', image: '/tailwind.png', alt: 'tailwind' },
    { id: 9, name: 'NextJs', image: '/nextjs.png', alt: 'next' },
    { id: 10, name: 'TypeScript', image: '/typescript.png', alt: 'ts' },
  ];

  return (
    <div
      className="w-full h-screen max-md:h-fit flex justify-start items-start max-md:pt-36 pt-28"
      id="skills"
    >
      <div className="max-width h-full px-6 py-5 sm:px-16 ">
        <h1 className="text-5xl font-bold">Skills</h1>
        <div className="h-[60%] grid lg:grid-cols-5 max-sm:grid-cols-1 grid-cols-2 gap-8 lg:max-w-full mt-20">
          {skillsData.map((skill)=>(
            <div className="skills-container" key={skill.id}>
              <img src={skill.image} alt={skill.alt} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
