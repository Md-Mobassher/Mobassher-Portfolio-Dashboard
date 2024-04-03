import Container from "./common/Container";
import UseIcon from "./common/UseIcon";
import Button from "./common/Button";

const Intro = () => {
  return (
    <Container>
      <div className="min-h-screen flex items-center -mt-12">
        <div className="text-center md:text-start lg:text-start">
          <p className="lg:text-2xl md:text-xl text-xl font-semibold text-primary">
            Hello! I am
          </p>
          <h1 className="lg:text-[78px] md:text-[70px] text-[55px] font-extrabold lg:mb-5 mb-2">
            Md Mobassher Hossain
          </h1>
          <h3 className=" text-2xl font-semibold  text-primary">
            Full Stack Developer
          </h3>
          <div className="flex flex-start gap-5 lg:justify-start  md:justify-start justify-center items-center">
            <div className="badge badge-primary badge-xs mt-3"></div>
            <p className="text-md font-semibold mt-3 ">Web Developer</p>
            <div className="badge badge-primary badge-xs mt-3"></div>
            <p className="text-md font-semibold mt-3">Programmer</p>
          </div>
          <div className="mt-10">
            <Button
              link="https://drive.google.com/file/d/1do9DTe38XXl99OyMsRiFROU-yNAzDqUJ/view?usp=sharing"
              target="__blank"
              color="white"
              bgColor="#00cf5d"
              title="Get Resume"
            />
            <Button
              clickEvent
              link="#about"
              color="white"
              bgColor="#1F2937"
              margin="0 0 0 15px"
              title="About Me"
            />
          </div>
          <div className="lg:mt-12 mt-10 flex lg:justify-start md:justify-start  justify-center mb-2">
            <h4 className="lg:text-2xl md:text-xl text-xl  font-semibold divider lg:divider-start md:divider-start lg:w-1/3 md:w-1/3 w-2/3 divider-primary">
              Follow Me
            </h4>
          </div>
          <UseIcon />
        </div>
      </div>
    </Container>
  );
};

export default Intro;
