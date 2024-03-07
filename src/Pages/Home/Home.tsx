import About from "@/components/About";
import Intro from "@/components/Intro";
import MySkills from "@/components/MySkills";
import Projects from "../Projects/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className="max-w-7x mx-auto ">
      <Intro />
      <About />
      <MySkills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
