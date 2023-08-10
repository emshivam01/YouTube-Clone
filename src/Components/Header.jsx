import { HiMenu } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Utils/AppSlice";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const disptach = useDispatch();

  const toggleSidebarMenu = () => {
    disptach(toggleSidebar());
  };

  const clearSearchBox = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchSuggester();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggester = async () => {
    const data = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );
    const json = await data.json();
    setSuggestions(json[1]);
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

      <div className="hidden md:block w-96 lg:w-1/3  border-[1px] border-gray-500  rounded-full">
        <div className="flex items-center">
          <div className="flex items-center  w-full rounded-l-full">
            <input
              className="w-full rounded-l-full px-6 py-1 text-lg outline-none font-normal "
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              value={searchQuery}
            />
            {searchQuery && (
              <button onClick={clearSearchBox}>
                <RxCross1 className="cursor-pointer mr-1" size={22} />
              </button>
            )}
          </div>
          <button className="border-l border-gray-800 px-5 rounded-r-full">
            <AiOutlineSearch size={28} />
          </button>
        </div>

        {suggestions && (
          <div className="fixed z-50 md:w-1/3 bg-white border-1 rounded-lg shadow-lg mt-2">
            <ul className="">
              {suggestions.map((suggestion, index) => (
                <li
                  className="py-1 px-5  text-lg hover:bg-gray-200 "
                  key={index}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mr-1  md:px-3 cursor-pointer">
        <FaRegCircleUser size={30} />
      </div>
    </div>
  );
};

export default Header;
