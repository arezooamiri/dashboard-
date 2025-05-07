
import Profile from "./Profile";
import BasicDateCalender from "./DateCalender";

export default function ProfileDetail() {
  return (<div className="flex flex-col gap-8 col-start-5 col-end-8">
     <Profile/>
     <div className="flex justify-between items-center">
        <span className="text-xl font-bold">Timeline </span>
        <button className="bg-black  text-white rounded-xl p-2 w-30 text-sm font-semibold ">add event +</button>
     </div>
     <div><BasicDateCalender/></div>

  </div>)
}
