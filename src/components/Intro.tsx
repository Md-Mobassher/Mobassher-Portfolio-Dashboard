import { MoveRight } from "lucide-react";
import UseIcon from "./common/UseIcon";
import { Separator } from "@radix-ui/react-select";
import assets from "@/assets";

const Intro = () => {
  return (
    <div className="min-h-[100vh-70px]  flex items-center justify-center lg:justify-start">
      <div className="text-center md:text-start lg:text-start mt-20">
        <p className="lg:text-2xl md:text-xl text-xl font-semibold text-[#02CF5F]">
          Hello! I am
        </p>
        <h1 className="lg:text-7xl md:text-6xl text-5xl font-extrabold lg:my-8 md:my-6 my-5">
          Md Mobassher Hossain
        </h1>
        <h3 className=" text-2xl font-semibold  text-[#02CF5F]">
          Full Stack Developer
        </h3>
        <div className="flex flex-start gap-5 lg:justify-start  md:justify-start justify-center items-center">
          <div className="p-0 mt-3">
            <MoveRight className="size-7 text-[#02CF5F]" />
          </div>

          <p className="text-md font-semibold mt-3 ">Web Developer</p>
          <div className="badge badge-primary badge-xs mt-3">
            <MoveRight className="size-7 text-[#02CF5F]" />
          </div>
          <p className="text-md font-semibold mt-3">Programmer</p>
        </div>

        {/* <IntroButton /> */}

        {/* follow */}
        <div className="lg:mt-14  mt-14 flex lg:justify-start md:justify-start  justify-center ">
          <div className="lg:hidden md:hidden flex justify-end items-center mr-2">
            <Separator className="lg:w-40 md:w-36 w-20  border border-[#02CF5F]" />
          </div>
          <div className="flex justify-between items-center">
            <h4 className=" text-2xl  font-bold mb-4">Follow Me</h4>{" "}
            <Separator className="lg:w-40 md:w-36 w-20  border border-[#02CF5F] ml-2" />
          </div>
        </div>
        <UseIcon />

        <div className="flex lg:justify-start md:justify-start justify-center items-center gap-5 mt-10 text-md font-semibold">
          Go to frontend{" "}
          <a href="https://mobassher.vercel.app">
            <img src={assets.image.logo} alt="logo image" className="w-14" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Intro;
