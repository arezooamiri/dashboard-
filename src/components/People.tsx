import AddingSvg from "../assets/icon/Addin";
import ToggleSvg from "../assets/icon/Togglesvg";

export default function People() {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
      <div className=" flex justify-between">
        <span className="text-xs text-gray-400 ">People</span>
        <ToggleSvg />
      </div>
      <span className="text-base font-bold "> 2/adults </span>
      <div className="flex justify-center gap-8 text-xs">
        <div className="relative w-10 h-10">
          <div className="z-10 top-0 absolute  h-full w-full ">
            <img src="/marta.png" alt="userpicture" />
          </div>
          <div className=" absolute  top-0 w-full h-full left-8 ">
            <img src="/john.png" alt="" />
          </div>
        </div>
        <div className="flex  items-center">marta,john</div>
        <button><AddingSvg/></button>
      </div>
    </div>
  );
}
