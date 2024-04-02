import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";

const useIcon = () => {
  return (
    <div className="flex gap-5 lg:justify-start md:justify-start justify-center lg: items-center transition duration-500 ">
      <a target="_blank" href="https://www.linkedin.com/in/md-mobassher/">
        <FaLinkedin className="size-8  hover:text-[#00cf5d]"></FaLinkedin>
      </a>

      <a target="_blank" href="https://github.com/Md-Mobassher">
        <FaGithubSquare className="size-8  hover:text-[#00cf5d]"></FaGithubSquare>
      </a>

      <a target="_blank" href="https://www.facebook.com/mdmobassherf">
        <FaFacebookSquare className="size-8   hover:text-[#00cf5d]"></FaFacebookSquare>
      </a>

      <a target="_blank" href="https://twitter.com/md_mobasshert">
        <AiFillTwitterSquare className="size-9 rounded hover:text-[#00cf5d]"></AiFillTwitterSquare>
      </a>
    </div>
  );
};

export default useIcon;
