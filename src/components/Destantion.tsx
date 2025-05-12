import Arrow2Svg from "../assets/icon/Arroww2";
import PlainSvg from "../assets/icon/PlainSvg";
import ToggleSvg from "../assets/icon/Togglesvg";

export default function Destantion() {
  return (
    <div className="bg-white rounded-xl p-3 flex flex-col gap-4">
      <div className=" flex justify-between">
        <span className="text-xs text-gray-400 ">Destantion</span>
        <ToggleSvg />
      </div>
      <span className="text-base font-bold "> Rome</span>
      <div className="flex justify-between gap-10 text-xs">
        <div className="flex gap-1">
          <span>Poland</span>
          <Arrow2Svg />
          <span>Rome</span>
        </div>
        <div className="flex items-cente break-words  ">
          <PlainSvg />
          <span className=" whitespace-nowrap ">2 h25 min flight</span>
        </div>
      </div>
    </div>
  );
}
