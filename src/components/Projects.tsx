export const Projects = () => {
  return (
    <div className="w-full flex justify-start items-start">
      <div className="max-width px-6 py-5 sm:px-16 flex flex-col justify-between">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="flex flex-col mt-10 gap-10 mb-20">
          <div className="project-tiles">
            <a href="https://to-do-app-vanillajs.netlify.app/" target="_blank">
              <img
                src="/resources/todo-app.PNG"
                alt=""
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10"
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="text-2xl lg:text-5xl font-bold capitalize">
                To-Do-list App
              </h1>
              <p className="text-center">
                Using HTML CSS Javascript and local storage I have built this
                basic to-do app which can add delete and mark the task
                completed.
              </p>
            </div>
          </div>
          <div className="project-tiles">
            <a href="https://best-eats-clone.vercel.app/" target="_blank">
              <img
                src="/resources/food-app.PNG"
                alt=""
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10"
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="text-2xl lg:text-5xl font-bold capitalize">
                Best-eats Food delevery app
              </h1>
              <p className="text-center">
                Using reactjs and tailwind I have built this basic clone of Uber
                eats with filter feature
              </p>
            </div>
          </div>
          <div className="project-tiles">
            <a href="https://weatherio-react-app.vercel.app/" target="_blank">
              <img
                src="/resources/weatherio.PNG"
                alt=""
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10"
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="text-2xl lg:text-5xl font-bold capitalize">
                Weatherio -Weather app
              </h1>
              <p className="text-center">
                Not a regular weather app... Using Reactjs css nad multiple api
                i have built this app which suggests city using debouncingt
                method. This app can also show weather of user's current
                location
              </p>
            </div>
          </div>
          <div className="project-tiles">
            <a
              href="https://car-rental-app-nextjs-lovat.vercel.app/"
              target="_blank"
            >
              <img
                src="/resources/carhub.PNG"
                alt=""
                className="hover:scale-105 duration-300 rounded-3xl max-md:mt-10"
              />
            </a>
            <div className="flex flex-col justify-center items-center gap-6 px-5">
              <h1 className="text-2xl lg:text-5xl font-bold capitalize">
                CarHub Car rental app
              </h1>
              <p className="text-center tracking-wider">
                Using Nextjs tailwind and headlessUi I have built this app which
                shows details of car manufacturer model,year,rent and more
                features which is obtained from RapidApi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
