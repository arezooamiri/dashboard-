import { Children, ReactNode } from "react";
import SideBar from "./Sidebar";
import Header from "./Header";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className=" grid grid-cols-5 gap-4 h-[100vh] p-4 ">
      <SideBar />
      <div className="flex flex-col ">
          <Header/>
          {props.children}
     </div>
    </div>
  );
};

export default Layout;
