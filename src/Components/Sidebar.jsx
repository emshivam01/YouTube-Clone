import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdOutlineLibraryBooks,
  MdOutlineHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { useSelector } from "react-redux";
import store from "../Utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

  return !isSideBarOpen ? null : (
    <div className="hidden  w-52 md:w-44 h-full md:flex md:flex-col gap-5 px-2 fixed bg-white ">
      <div className="flex flex-col gap-3   cursor-pointer">
        <Link to="/">
          <div className="flex gap-5 items-center text-sm font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
            <AiOutlineHome size={26} />
            Home
          </div>
        </Link>
        <div className="flex gap-5 items-center text-sm font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineVideoLibrary size={26} />
          Shorts
        </div>
        <div className="flex gap-5 items-center text-sm font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineSubscriptions size={26} />
          Subscriptions
        </div>
      </div>

      <hr className="h-[2px] bg-black" />

      <div className="flex flex-col gap-3 cursor-pointer">
        <div className="flex gap-5 items-center text-sm font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineLibraryBooks size={26} />
          Library
        </div>
        <div className="flex gap-5 items-center text-sm font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineHistory size={26} />
          History
        </div>
        <div className="flex gap-5 items-center text-sm font-medium hover:bg-gray-200 px-3 py-2 rounded-lg ml-1">
          <GoVideo size={21} />
          Your Videos
        </div>
        <div className="flex gap-5 items-center text-sm font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineWatchLater size={26} />
          Watch Later
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
