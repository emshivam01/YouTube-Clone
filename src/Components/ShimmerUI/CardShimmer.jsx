import { useSelector } from "react-redux";

const CardShimmer = () => {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

  return (
    <div
      className={
        "w-[300px] max-w-sm animate-pulse" + (isSideBarOpen ? " sm:w-80" : " sm:w-72 ")
      }
    >
      <div className="w-80  max-w-full h-44 bg-gray-400 rounded-sm "></div>
      <p className="w-80  max-w-full h-4  bg-gray-400 rounded-sm mt-2"></p>
      <p className="w-48 max-w-full h-4  bg-gray-400 rounded-sm mt-2"></p>
    </div>
  );
};

export default CardShimmer;
