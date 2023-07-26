import FilterButtons from "./FilterButtons";
import VideoCardContainer from "./VideoCardContainer";
import { useDispatch, useSelector } from "react-redux";
import { enableSidebar } from "../Utils/AppSlice";
import { useEffect } from "react";

const MainContainer = () => {
  const disptach = useDispatch();

  const enableSidebarMenu = () => {
    disptach(enableSidebar());
  };

  useEffect(() => {
    enableSidebarMenu();
  }, []);

  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
  return (
    <div className={isSideBarOpen ? "md:ml-44 " : "w-full 52 "}>
      <FilterButtons />
      <VideoCardContainer />
    </div>
  );
};

export default MainContainer;
