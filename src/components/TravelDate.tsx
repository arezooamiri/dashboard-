import ToggleSvg from "../assets/icon/Togglesvg";

export default function TravelDate() {
  return (
    <div className="bg-white rounded-xl p-4  flex flex-col gap-4">
      <div className=" flex justify-between">
        <span className="text-xs text-gray-400 ">Travel Date</span>
        <ToggleSvg />
      </div>
      <span className="text-base font-bold ">5 Days </span>
      <div className="flex gap-2 text-xs">
        <span>first date</span>
        <span>second date</span>
      </div>
    </div>
  );
}
