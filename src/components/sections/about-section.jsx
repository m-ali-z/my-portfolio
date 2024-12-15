import Dots from "../ui/dots";
import Skill from "../ui/skill";

const About = () => {
  return (
    <section
      id="about"
      className="relative px-8 py-40 h-auto bg-[#121921e0] overflow-hidden"
    >
      <h1 className="text-5xl font-bold text-white mb-10">About</h1>
      <div className="flex gap-2 justify-start">
        <hr className="w-14 flex-none border-t-4 text-white mt-3" />
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          ducimus nulla voluptate dolorem neque culpa iste perspiciatis iusto
          inventore tempora quod, magni suscipit, in facilis autem nobis
          excepturi quidem? Possimus? Assumenda mollitia sequi quae eos
          aspernatur provident iste enim quis, adipisci velit odit natus
          molestiae similique sed consectetur? Dignissimos nobis illo odio
          ratione, accusantium aliquid harum consequuntur vero nostrum itaque.
          Voluptates modi possimus pariatur sequi expedita minus perferendis
          natus placeat quidem nisi consectetur neque unde esse qui iste vel
          rerum harum, velit a fuga ducimus commodi. Mollitia, natus? Id, quas.
          Beatae numquam, velit ut ea, harum rerum, iusto tempora sint
          doloremque aspernatur libero doloribus facere voluptate at fugiat
          molestiae dolorem in ad omnis corporis. Accusantium nam dolorum
          architecto iusto tempore?
        </p>
      </div>

      <div className="mt-10 ">
        <h1 className="font-bold text-5xl text-center text-white">My Skills</h1>
        <div className="flex flex-wrap justify-center gap-8">
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
      <Dots />
    </section>
  );
};

export default About;
