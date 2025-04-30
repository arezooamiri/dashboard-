import { useState } from "react";
import AllTripSvg from "../assets/icon/AllTrip";
import AttractionSvg from "../assets/icon/Attraction";
import HomeSvg from "../assets/icon/Home";
import PlusSvg from "../assets/icon/Plus";
import RoomSvg from "../assets/icon/Room";
import TransportSvg from "../assets/icon/Transport";
import TravelSvg from "../assets/icon/Travels";
import TripSvg from "../assets/icon/Trip";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  
  const listMenu = [
    {
      icon:<HomeSvg/>,
      name:"Home",
      path:"/home"
    },
    {
      icon: <AllTripSvg />,
      name: "All Trips",
      path:"/all-trips",
    },
    {
      icon: <TravelSvg />,
      name: "Travels",
      path:"/travels"
    },
    {
      icon: <RoomSvg />,
      name: "Rooms",
      path:'/rooms'
    },
    {
      icon: <TransportSvg />,
      name: "Transport",
      path:'/transport'
    },
    {
      icon: <AttractionSvg />,
      name: "Attractions",
      path:'/attractions'
    },
  ];
  
  return (
    <div className="col-span-1 flex flex-col items-center  justify-between   bg-white rounded-xl">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-4 p-6">
          <TripSvg />
          <span className="font-medium text-2xl text-black">Tripit</span>
        </div>
        <div className="w-44 h-9 flex justify-center gap-2 items-center rounded-xl bg-blue-600 text-white ">
          <button className=" text-sm    ">
            {" "}
            New trip
           
          </button>
          <PlusSvg />
        </div>

        <div className="flex flex-col pt-6 gap-1">
          
          {listMenu.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({isActive})=>`flex gap-4 items-center w-48 p-2 cursor-pointer font-medium text-sm rounded-xl pl-4 text-black ${isActive? 'bg-[rgb(250,249,255)] rounded-2xl':''}`}
             
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div
        className="w-5/6  rounded-l "
        style={{ backgroundColor: "rgb(250,249,255)" }}
      ></div>
    </div>
  );
};
export default SideBar;
