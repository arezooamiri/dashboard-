import Arrow2Svg from "../assets/icon/Arroww2";
import ToggleSvg from "../assets/icon/Togglesvg";

export default function TravelDate() {
  return (
    <div className="bg-white rounded-xl p-3  flex flex-col gap-4">
      <div className=" flex justify-between">
        <span className="text-xs text-gray-400 ">Travel Date</span>
        <ToggleSvg />
      </div>
      <span className="text-base font-bold ">5 Days </span>
      <div className="flex gap-2 text-xs">
        <span>01.09.2021</span>
        <Arrow2Svg className="text-blue-400"/>
        <span>05.09.2021</span>
      </div>
    </div>
  );
}
