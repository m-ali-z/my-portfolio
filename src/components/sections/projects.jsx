import Project from "../ui/project";

const Projects = () => {
  return (
    <section id="projects" className="h-auto bg-[#18202ae0] relative py-32">
      <h1 className="text-5xl text-white font-bold text-center absolute -top-8 translate-x-1/2">
        Projects
      </h1>
      <div className="w-[60%] m-auto py-20 flex flex-col gap-6 ">
        {/* PROJECTS */}

        <Project topic="FYP: SOCIAL MEDIA ANALYTICS APP WITH NEXT.JS, FLASK AND SQLITE">
          This tool is used to analyze various aspects on social media and
          visualizes trends across different regions and languages. Made with
          Next.Js with its server-side-rendering capabilities and easy routing
          in the whole application provide amazing user experience. Using Flask
          in backend, provides easy API integration and machine learning models.
          Sqlite as database for managing data using relations to ensure
          effective data management.
        </Project>
        <Project topic="ECOMMERCE STORE SITE (NEXT.JS)">
          An ecommerce store with admin dashboard to keep track of all the
          products, orders and earnings. Mongo DB used as database and Prisma to
          further make it more easy to handle queries. Role based authentication
          using clerk.
        </Project>
        <Project topic=" DISTRIBUTED FILE STORAGE SYSTEM">
          A file storage system which distributes a file in chunks locally on
          machine using gRPC, Next.Js and Node.Js. A web app to store a file in
          chunks. Authentication to secure the files. gRPC for master-slave
          architecture
        </Project>
        <Project topic="FYP: SOCIAL MEDIA ANALYTICS APP WITH NEXT.JS, FLASK AND SQLITE">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
          laboriosam, labore reprehenderit ea totam fuga rerum laudantium
          repudiandae quia enim neque, consequatur, aperiam perferendis
          delectus. Saepe ab quibusdam rem quaerat.
        </Project>
      </div>
    </section>
  );
};

export default Projects;
