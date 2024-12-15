const Skill = ({ imagesPath, height, width, name }) => {
  return (
    <div className="relative mt-10 mb-[20rem] h-[15rem] w-[15rem] rounded-xl hover:bg-orange-400 bg-[#1e483f] mx-auto flex flex-col justify-center items-center">
      <div className="flex">
        {imagesPath.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            height={height}
            width={width}
            className="mx-auto"
          />
        ))}
      </div>
      <p className="text-lg absolute bottom-2 text-white">{name}</p>
    </div>
  );
};

export default Skill;
