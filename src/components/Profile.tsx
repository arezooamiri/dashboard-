import EnglandFlagSvg from "../assets/icon/EnglandFlag";
import Notifcation from "../assets/icon/Notification";

export default function Profile() {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 p-3">
      <div className="flex justify-around gap-6
       items-center">
        <EnglandFlagSvg />
        <Notifcation />
      </div>
      <div className="flex text-sm gap-2 items-center">
           <span>Nick Martin</span>
            <div className="w-7 h-7"><img src="./nik.png" alt="profilepicture" width={100} height={100} /></div>
      </div>
    </div>
  );
}
