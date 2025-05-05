import { Router, useNavigate } from "react-router-dom";
import ArrowSvg from "../assets/icon/Arrow";
import SearchSvg from "../assets/icon/Search";
import Notifcation from "../assets/icon/Notification";

export default function Header() {
  const navigate = useNavigate();
  return (
    
      <div className=" border-b border-gray-300 text-black p-3 flex  text-sm justify-between   items-center">
        <div className="flex justify-center gap-6">
          <button>Travels</button>
          <button onClick={() => navigate("/travels")}>
            <ArrowSvg />
          </button>
        </div>
        <div className="text-gray-400">
          {" "}
          search
          <input type="text" />
        </div>

        <SearchSvg />
      </div>
      
   
  );
}
