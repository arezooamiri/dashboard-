
import SideBar from "./Sidebar";
import Header from "./Header";
import ProfileDetail from "./ProfileDetail";
import BannerTravel from "./Bannertravel";
import ReportTravel from "./ReportTravel";
import TravelDetail from "./TravelDetail";
import CityMap from "./CityMap";
import Todos from "./Todos";

const Layout = () => {
  
  return (
    <div className=" grid grid-cols-5 gap-6 h-[100vh] p-4 ">
      <SideBar />
      <div className="flex flex-col col-start-2 col-end-5 ">
        <Header />
        <div className="grid grid-cols-4 gap-4 h-2/6 pt-8  ">
          <BannerTravel />
          <ReportTravel />
          <TravelDetail />

          <CityMap />
          <Todos />
        </div>
      </div>
      <ProfileDetail />
    </div>
  );
};

export default Layout;
