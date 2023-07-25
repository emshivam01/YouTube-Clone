import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdOutlineLibraryBooks,
  MdOutlineHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { GoVideo } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className=" w-52 h-full flex flex-col gap-5 px-2 fixed bg-white">
      <div className="flex flex-col gap-3   cursor-pointer">
        <div className="flex gap-5 items-center text-base font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <AiOutlineHome size={30} />
          Home
        </div>
        <div className="flex gap-5 items-center text-base font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineVideoLibrary size={30} />
          Shorts
        </div>
        <div className="flex gap-5 items-center text-base font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineSubscriptions size={30} />
          Subscriptions
        </div>
      </div>

      <hr className="h-[2px] bg-black" />

      <div className="flex flex-col gap-3 cursor-pointer">
        <div className="flex gap-5 items-center text-base font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineLibraryBooks size={30} />
          Library
        </div>
        <div className="flex gap-5 items-center text-base font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineHistory size={30} />
          History
        </div>
        <div className="flex gap-5 items-center text-base font-medium hover:bg-gray-200 px-3 py-2 rounded-lg ml-1">
          <GoVideo size={25} />
          Your Videos
        </div>
        <div className="flex gap-5 items-center text-base font-medium hover:bg-gray-200 px-3 py-2 rounded-lg">
          <MdOutlineWatchLater size={30} />
          Watch Later
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
