import {  ReactNode } from "react";
import SideBar from "./Sidebar";
import Header from "./Header";
import ProfileDetail from "./ProfileDetail";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className=" grid grid-cols-5 gap-4 h-[100vh] p-4 ">
      <SideBar />
      <div className="flex flex-col col-start-2 col-end-5 ">
        <Header />
        {props.children}
      </div>
      <ProfileDetail />
    </div>
  );
};

export default Layout;
