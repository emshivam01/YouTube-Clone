import { HiMenu } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full z-10 bg-white flex items-center justify-between px-2  fixed top-0">
      <div className="flex items-center cursor-pointer">
        <div className="hidden md:block ml-3 ">
          <HiMenu size={30} />
        </div>
        <div>
          <img className="w-32" src="../../assets/youtube-logo.png" />
        </div>
      </div>

      <div>
        <div className="mr-1 cursor-pointer">
          <FaRegCircleUser size={32} />
        </div>
      </div>
    </div>
  );
};

export default Header;
