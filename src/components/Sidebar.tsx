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
          <span className="font-bold text-4xl text-black">Tripit</span>
        </div>
        <button className="w-48 h-12 rounded-xl bg-blue-600 text-white  ">
          <div className="flex justify-center  gap-2  ">
            {" "}
            New trip
            <PlusSvg />
          </div>
        </button>

        <div>
          <div
            className="flex gap-4 items-center w-48 p-2 not-first-of-type: font-semibold text-base rounded-xl pl-4 text-black"
            style={{ backgroundColor: "rgb(250,249,255)" }}
          >
            <HomeSvg />
            Home
          </div>
          {listMenu.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center w-48 p-2 font-semibold text-base rounded-xl pl-4 text-black"
            >
              {item.icon}
              {item.name}
            </div>
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
