import Intro from "../intro";
import Navbar from "../navbar";
import Picture from "../picture";
import RightContent from "../right-content";

const Home = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#17202a] h-screen shadow-black shadow-xl px-10 relative"
    >
      <Navbar />
      <Intro />
      <RightContent />
      <Picture />
    </section>
  );
};

export default Home;
