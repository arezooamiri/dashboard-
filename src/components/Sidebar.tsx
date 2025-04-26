import AllTripSvg from "../assets/icon/AllTrip";
import AttractionSvg from "../assets/icon/Attraction";
import HomeSvg from "../assets/icon/Home";
import PlusSvg from "../assets/icon/Plus";
import RoomSvg from "../assets/icon/Room";
import TransportSvg from "../assets/icon/Transport";
import TravelSvg from "../assets/icon/Travels";
import TripSvg from "../assets/icon/Trip";

const SideBar = () => {
  const listMenu = [
    {
      icon:<HomeSvg/>,
      name:"Home"
    },
    {
      icon: <AllTripSvg />,
      name: "All Trips",
    },
    {
      icon: <TravelSvg />,
      name: "Travels",
    },
    {
      icon: <RoomSvg />,
      name: "Rooms",
    },
    {
      icon: <TransportSvg />,
      name: "Transport",
    },
    {
      icon: <AttractionSvg />,
      name: "Attractions",
    },
  ];
  return (
    <div className="col-span-1 flex flex-col items-center  justify-between gap-8  bg-white rounded-xl">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-4 p-6">
          <TripSvg />
          <span className="font-medium text-2xl text-black">Tripit</span>
        </div>
        <button className="w-44 h-8 rounded-xl bg-blue-600 text-white  ">
          <div className="flex justify-center text-sm   gap-2  ">
            {" "}
            New trip
            <PlusSvg />
          </div>
        </button>

        <div className="flex flex-col gap-2">
          
          {listMenu.map((item, index) => (
            <button
              key={index}
              className="flex gap-2 items-center w-48 p-2 cursor-pointer font-medium text-sm rounded-xl pl-4 text-black"
            >
              {item.icon}
              {item.name}
            </button>
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
