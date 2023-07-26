import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex  flex-col mt-[62px] md:mt-[70px]  ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
