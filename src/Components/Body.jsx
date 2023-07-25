import FilterButtons from "./FilterButtons";
import Sidebar from "./Sidebar";
import VideoCardContainer from "./VideoCardContainer";

const Body = () => {
  return (
    <div className="flex justify-between mt-[76px] mt">
      <Sidebar />
      <div className="ml-52 ">
        <FilterButtons />
        <VideoCardContainer />
      </div>
    </div>
  );
};

export default Body;
