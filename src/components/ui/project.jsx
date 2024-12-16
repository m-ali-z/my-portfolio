const Project = ({ topic, children }) => {
  return (
    <div className="flex mb-20 justify-around">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <p className="rounded-full h-6 w-6 transition-all duration-200 bg-orange-400  shadow-[0px_0px_20px_0px_#FFA500]" />
        </div>
        <span className="h-[70%] w-[2px] bg-white" />
      </div>
      <div className="w-[80%]">
        <h2 className="text-white font-bold text-2xl">{topic}</h2>
        <p className="text-gray-200">{children}</p>
      </div>
    </div>
  );
};

export default Project;
