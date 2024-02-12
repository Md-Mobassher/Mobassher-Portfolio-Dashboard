import profile from "../Assets/Images/mobassher.png";
import Button from "./common/Button";

import Container from "./common/Container";
import Title from "./common/Title";

const About = () => {
  return (
    <div id="about" className="lg:pb-14">
      <Container>
        <Title title="About Me" />
        <div className="lg:flex sm:flex-row-reverse  md:flex  items-center justify-between">
          <div className="flex-row flex-1">
            <div className=" flex  justify-center lg:mt-0 ">
              <img
                className="w-[320px] rounded-xl transform scale-[0.95] filter grayscale hover:scale-[1] hover:grayscale-0 transition-all duration-1000"
                alt="profile"
                src={profile}
              />
            </div>
          </div>
          <div className="flex-row flex-1 md:mt-0 mt-10">
            <p className="lg:text-start md:text-start text-center">
              Hello! I'm Md Mobassher Hossain, a passionate Full-stack
              developer. I develop web applications. My core skill is based on
              JavaScript and I love to do most of the things using JavaScript. I
              love to make the web more open to the world. I have graduated with
              a bachelor's degree in Textile Engineering from Primeasia
              University at Banani, Bangladesh in 2021. I am available for any
              kind of job opportunity that suits my interests.
            </p>
            <div className="mt-10 flex lg: justify-start md:justify-start justify-center">
              <Button
                link="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button
                clickEvent
                link="#myskills"
                margin="0 0 0 15px"
                title="My Skills"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
