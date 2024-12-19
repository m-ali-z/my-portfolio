import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="sm:text-left sm:w-full md:w-[40%] text-white text-xl md:text-3xl flex flex-col place-content-center  md:pt-8 top-[20%] md:top-[30%] absolute z-20">
      <p className="mb-2">
        I'M{" "}
        <span className="text-[#f4d03f] md:text-6xl text-4xl">
          <TypeAnimation
            sequence={[10, "MUHAMMAD ALI"]}
            speed={40}
            cursor={false}
          />
        </span>
      </p>

      <p>
        <TypeAnimation
          sequence={[300, "FULL STACK WEB DEVELOPER AND SOFTWARE ENGINEER"]}
          speed={40}
          cursor={false}
        />
      </p>
    </div>
  );
};

export default Intro;
