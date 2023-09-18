interface toggle {
  theme: string;
}

export const ToggleButton = ({ theme }: toggle) => {
  return (
    <div className="bg-gray-400 w-12 h-7 rounded-full flex items-center justify-between">
      <div className="w-full flex justify-start">
        <div
          className={
            theme === "dark"
              ? "w-4 h-4 rounded-full bg-black m-1 p-2"
              : "hidden"
          }
        />
      </div>
      <div className="w-full flex justify-start">
        <div
          className={
            theme === "light"
              ? "w-4 h-4 rounded-full bg-white m-1 p-2"
              : "hidden"
          }
        />
      </div>
    </div>
  );
};
