import ArrowLeftSvg from "../assets/icon/Arrowleft";
import ArrowRightSvg from "../assets/icon/ArrowRight";

const BannerTravel = () => {
  return (
    <div className="bg-[rgb(254,241,203)]  col-start-1 col-end-4 flex rounded-md p-2">
     
        <div className="flex flex-col gap-6 p-2 pl-6">
           <span className="text-sm  whitespace-nowrap ">Nearst trip</span>
           <h2 className="text-6xl font-semibold">Rome</h2>
           <div className="flex justify-around">
              <button className=" focus:bg-white rounded-full p-4"><ArrowLeftSvg/></button>
              <button  className=" focus:bg-white rounded-full p-4"><ArrowRightSvg/></button>

           </div>
        </div>
       <div className="h-full w-full "> <img src="image.png" alt="rometravel" className="w-full h-full" /></div>
        
    </div>
  );
};
export default BannerTravel;
