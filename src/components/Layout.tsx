import { ReactNode } from "react";
import SideBar from "./Sidebar";
import Header from "./Header";
import ProfileDetail from "./ProfileDetail";
import BannerTravel from "./Bannertravel";
import ReportTravel from "./ReportTravel";

const Layout = () => {
  return (
    <div className=" grid grid-cols-5 gap-6 h-[100vh] p-4 ">
      <SideBar />
      <div className="flex flex-col col-start-2 col-end-5 ">
        <Header />
        <div className="grid grid-cols-4 gap-1 h-2/6 pt-8  ">
          <BannerTravel />
          <ReportTravel />
        </div>
      </div>
      <ProfileDetail />
    </div>
  );
};

export default Layout;
