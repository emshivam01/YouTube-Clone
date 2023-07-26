import { useDispatch } from "react-redux";
import { disableSidebar } from "../Utils/AppSlice";
import { useEffect } from "react";

const WatchVideo = () => {
  const disptach = useDispatch();

  const disableSidebarMenu = () => {
    disptach(disableSidebar());
  };

  useEffect(() => {
    disableSidebarMenu();
  }, []);

  return <div className="text-black text-3xl">WatchVideo</div>;
};

export default WatchVideo;
