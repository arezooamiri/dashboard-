import Arrow2Svg from "../assets/icon/Arroww2";
import PlainSvg from "../assets/icon/PlainSvg";
import ToggleSvg from "../assets/icon/Togglesvg";

export default function Destantion() {
  return (
    <div className="bg-white rounded-xl p-4  flex flex-col gap-4">
      <div className=" flex justify-between">
        <span className="text-xs text-gray-400 ">Destantion</span>
        <ToggleSvg />
      </div>
      <span className="text-base font-bold "> city {"rome"}</span>
      <div className="flex justify-between gap-8 text-xs">
        <div className="flex gap-4">
          <span>Poland</span>
          <Arrow2Svg />
          <span>Rome</span>
        </div>
        <div className="flex items-center gap-2 ">
          <PlainSvg />
          <span>2 h 25 min flight</span>
        </div>
      </div>
    </div>
  );
}
