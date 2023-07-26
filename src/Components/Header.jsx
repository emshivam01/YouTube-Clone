import { HiMenu } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Utils/AppSlice";

const Header = () => {
  const disptach = useDispatch();

  const toggleSidebarMenu = () => {
    disptach(toggleSidebar());
  };

  return (
    <div className="w-full z-10 bg-white flex items-center justify-between px-2 md:py-1  fixed top-0">
      <div className="flex gap-2 items-center cursor-pointer">
        <button
          className="hidden md:block ml-3 "
          onClick={() => toggleSidebarMenu()}
        >
          <HiMenu size={26} />
        </button>
        <div>
          <img className="w-[115px]" src="../../assets/youtube-logo.png" />
        </div>
      </div>

      <div className="hidden md:flex w-1/3  border-[1px] border-gray-500 rounded-full">
        <input className="w-full  rounded-l-full px-6 py-1 text-lg font-normal" />
        <button className="border-l border-gray-800 px-5 rounded-r-full">
          <AiOutlineSearch size={28} />
        </button>
      </div>

      <div className="mr-1  md:px-3 cursor-pointer">
        <FaRegCircleUser size={30} />
      </div>
    </div>
  );
};

export default Header;
