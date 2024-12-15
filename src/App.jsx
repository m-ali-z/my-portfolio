import Home from "./components/sections/home-section";
import About from "./components/sections/about-section";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";

function App() {
  return (
    <>
      <div className="">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
