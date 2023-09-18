interface toggle {
  theme: string;
}

export const ToggleButton = ({ theme }: toggle) => {
  return (
    <div className="bg-gray-400 w-12 h-7 rounded-full flex items-center justify-between">
      <div className="w-full flex justify-start">
        <div
        className={`w-4 h-4 rounded-full m-1 p-2 transition duration-500 ${theme === "dark" ? "bg-black" : "bg-white translate-x-5"}`}
        />
      </div>
    </div>
  );
};
