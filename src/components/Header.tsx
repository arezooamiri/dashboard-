import ArrowSvg from "../assets/icon/Arrow";
import SearchSvg from "../assets/icon/Search";


export default function Header(){


    return(
        <div className=" border-b border-gray-400 text-black h-1/12 flex  justify-between  p-2">
             <div className="flex justify-center gap-6">
                 <span>Travels</span>
                 <ArrowSvg/>

             </div>
             <div className="text-gray-400"> search</div>
             <SearchSvg/>
        </div>
    )
}