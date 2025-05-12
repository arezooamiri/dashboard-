import Profile from "./Profile";
import BasicDateCalender from "./DateCalender";

export default function ProfileDetail() {
  return (
    <div className="flex flex-col gap-8 col-start-6 pl-4 col-end-8">
      <Profile />
      <div className="flex justify-between items-center pl-4 pr-4">
        <span className="text-xl font-bold">Timeline </span>
        <button className="bg-black  text-white rounded-xl p-2 w-30 text-sm font-semibold ">
          add event +
        </button>
      </div>
      <div className="w-[100px]">
        <BasicDateCalender />
      </div>
    </div>
  );
}
