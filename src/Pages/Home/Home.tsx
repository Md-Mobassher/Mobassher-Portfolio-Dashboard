import About from "@/components/About";
import Intro from "@/components/Intro";
import MySkills from "@/components/MySkills";
import Contact from "@/components/Contact";
import Portfolios from "../Portfolios/Portfolios";

const Home = () => {
  return (
    <div className="max-w-7x mx-auto ">
      <Intro />
      <About />
      <MySkills />
      <Portfolios />
      <Contact />
    </div>
  );
};

export default Home;
