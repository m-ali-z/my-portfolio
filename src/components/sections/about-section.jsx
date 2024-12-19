import { useEffect, useRef } from "react";
import Skill from "../ui/skill";
import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: -150,
        transition: { type: "spring", duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        x: 300,
        transition: { type: "spring", duration: 1 },
      });
    }

    console.log("Element is in view: ", inView);
  }, [inView, animation]);
  return (
    <section id="about" className="relative px-8 py-40 h-auto bg-[#121921e0] ">
      <h1 className="text-5xl font-bold text-white mb-10">About</h1>
      <div className="flex gap-2 justify-start">
        <hr className="w-14 flex-none border-t-4 text-white mt-3" />
        <p className="text-white text-lg pl-10  leading-loose tracking-wide">
          Hi, I’m Muhammad Ali, a passionate Software Engineer with a strong
          foundation in programming and web development. I specialize in
          creating responsive, dynamic, and user-friendly websites, blending
          functionality with visually appealing designs. I have a solid
          understanding of core CS concepts, including Object-Oriented
          Programming, Data Structures and Algorithms, Databases, Operating
          Systems, and Networking, which form the backbone of my technical
          skills. Currently, I am honing my expertise in web development and
          exploring the art of building animated websites that captivate users
          and enhance their digital experience. Beyond coding, I enjoy solving
          complex problems, learning new technologies, and collaborating on
          projects that make a meaningful impact. My goal is to craft websites
          that not only look great but also deliver seamless functionality.
          Let’s connect and bring your ideas to life!
        </p>
      </div>

      <div className="mt-10 ">
        <h1 className="font-bold text-5xl text-center text-white">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full ">
          <Skill
            imagesPath={["nodejs.svg"]}
            height={150}
            width={150}
            name="NodeJs"
          />
          <Skill
            imagesPath={["css.svg", "html.svg"]}
            height={100}
            width={100}
            name={"HTML and CSS"}
          />
          <Skill
            imagesPath={["mongodb.svg"]}
            height={100}
            width={100}
            name={"MONGODB"}
          />
          <Skill
            imagesPath={["js.svg"]}
            height={100}
            width={100}
            name={"Javascript"}
          />
          <Skill
            imagesPath={["nextjs.svg"]}
            height={100}
            width={100}
            name={"NEXTJS"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
