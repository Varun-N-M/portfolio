interface mode {
  theme: string;
}

export const Projects = ({ theme }: mode) => {
  return (
    <div className="w-full flex justify-start items-start pt-28" id="projects">
      <div className="max-width px-6 py-5 sm:px-16 flex flex-col justify-between">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="flex flex-col  gap-10 mt-10 mb-20">
          <div
            className={`project-tiles shadow-lg ${
              theme === "light" ? " shadow-gray-500" : "shadow-[#3d587a]"
            }`}
          >
            <a
              href="https://nextjs-trello-clone-two.vercel.app/"
              target="_blank"
            >
              <img
                src="/resources/trello-app.PNG"
                alt="car-hub"
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10 "
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="w-full text-2xl lg:text-5xl font-bold capitalize  max-md:text-left">
                Trello-Clone
              </h1>
              <p className="text-justify  max-md:text-left">
                This is a work in progress app. Using Nextjs tailwind Material
                Ui and other libraries I have built this app with "Drag and
                drop" feature of Tasks and Lists.
              </p>
              <a
                href="https://github.com/Varun-N-M/trello-clone"
                target="_blank"
              >
                <button className=" px-5 py-2 rounded-xl text-sm hover:scale-105 hover:font-bold github-shadow">
                  --GitHub
                </button>
              </a>
            </div>
          </div>
          <div
            className={`project-tiles shadow-lg ${
              theme === "light" ? " shadow-gray-500" : "shadow-[#3d587a]"
            }`}
          >
            <a
              href="https://car-rental-app-nextjs-lovat.vercel.app/"
              target="_blank"
            >
              <img
                src="/resources/carhub.PNG"
                alt="car-hub"
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10 "
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="w-full text-2xl lg:text-5xl font-bold capitalize  max-md:text-left">
                CarHub Car rental app
              </h1>
              <p className="text-justify  max-md:text-left">
                Using Nextjs tailwind and headlessUi I have built this app which
                shows details of car manufacturer model,year,rent and more
                features which is obtained from RapidApi.
              </p>
              <a
                href="https://github.com/Varun-N-M/car-rental-app"
                target="_blank"
              >
                <button className=" px-5 py-2 rounded-xl text-sm hover:scale-105 hover:font-bold github-shadow">
                  --GitHub
                </button>
              </a>
            </div>
          </div>
          <div
            className={`project-tiles shadow-lg ${
              theme === "light" ? " shadow-gray-500" : "shadow-[#3d587a]"
            }`}
          >
            <a href="https://weatherio-react-app.vercel.app/" target="_blank">
              <img
                src="/resources/weatherio.PNG"
                alt="weather"
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10 "
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="w-full text-2xl lg:text-5xl font-bold capitalize max-md:text-left">
                Weatherio - Weather app
              </h1>
              <p className=" max-md:text-left text-justify">
                Not a regular weather app... Using Reactjs css and multiple api
                i have built this app which suggests city using debouncingt
                method. This app can also show weather of user's current
                location
              </p>
              <a
                href="https://github.com/Varun-N-M/react-weather-app"
                target="_blank"
              >
                <button className=" px-5 py-2 rounded-xl text-sm hover:scale-105 hover:font-bold github-shadow">
                  --GitHub
                </button>
              </a>
            </div>
          </div>
          <div
            className={`project-tiles shadow-lg ${
              theme === "light" ? " shadow-gray-500" : "shadow-[#3d587a]"
            }`}
          >
            <a href="https://best-eats-clone.vercel.app/" target="_blank">
              <img
                src="/resources/food-app.PNG"
                alt="food-app"
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10 w-[650px]"
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5 ">
              <h1 className="w-full text-2xl lg:text-5xl font-bold capitalize max-md:text-left">
                Best-eats Food delivery app
              </h1>
              <p className="text-justify max-md:text-left">
                Using reactjs and tailwind I have built this basic clone of Uber
                eats with filter feature
              </p>
              <a href="https://github.com/Varun-N-M/food-app" target="_blank">
                <button className="github-shadow px-5 py-2 rounded-xl text-sm hover:scale-105 hover:font-bold ">
                  --GitHub
                </button>
              </a>
            </div>
          </div>
          <div
            className={`project-tiles shadow-lg ${
              theme === "light" ? " shadow-gray-500" : "shadow-[#3d587a]"
            }`}
          >
            <a href="https://to-do-app-vanillajs.netlify.app/" target="_blank">
              <img
                src="/resources/todo-app.PNG"
                alt="todo"
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10 "
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="w-full text-2xl lg:text-5xl font-bold capitalize max-md:text-left">
                To-Do-list App
              </h1>
              <p className="text-justify max-md:text-left">
                Using HTML CSS Javascript and local storage I have built this
                basic to-do app which can add delete and mark the task
                completed.
              </p>
              <a href="https://github.com/Varun-N-M/to-do-app" target="_blank">
                <button className="github-shadow px-5 py-2 rounded-xl text-sm hover:scale-105  hover:font-bold">
                  --GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
