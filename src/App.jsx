import Home from "./components/sections/home-section";
import About from "./components/sections/about-section";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import { ArrowBigUp, ArrowBigUpDash } from "lucide-react";
import { BiUpArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import Dots from "./components/ui/dots";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <div
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } md:hidden bg-orange-500 border-2 border-orange-500 w-10 h-10 rounded-full fixed bottom-8 left-5`}
      >
        <ArrowBigUpDash size={"lg"} />
      </div>
      <div className="absolute w-full top-[140rem]">
        <Dots />
      </div>
    </>
  );
}

export default App;
