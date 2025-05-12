const ReportTravel = () => {
  return (
    <div className="flex flex-col gap-4 col-auto rounded-md ">
      <div className="text-base text-gray-400  ">Expenses</div>
      <div className="flex flex-col items-center justify-center text-white  absolute p-6 pt-10 ">
        <div
          className="   w-20 h-20 rounded-full  flex justify-center items-center"
          style={{ backgroundColor: "rgba(2, 175, 114, 0.6)" }}
        >
          60%
        </div>
        <div
          className="  relative w-16 h-16 rounded-full flex justify-center items-center  z-10 right-8 bottom-6"
          style={{ background: "linear-gradient(to right, #6C50FC, #6C50FC)" }}
        >
          30%
        </div>
        <div className=" relative w-14 h-14 rounded-full bg-orange-300 flex justify-center items-center bottom-28 left-12 -z-10">
          10%
        </div>
      </div>
      <div className="flex gap-2 relative  top-36">
        <div className="flex items-center gap-1 ">
          <div className="w-3 h-3 rounded-full bg-green-500">
            <div className="w-2 h-2 bg-white   transform translate-x-0.5 translate-y-0.5 rounded-full"></div>
          </div>
          <span className="text-black md:text-xs md:font-normal">
            Transport
          </span>
        </div>
        <div className="flex items-center gap-1 ">
          <div className="w-3 h-3    rounded-full bg-purple-400">
            <div className="w-2 h-2 transform translate-x-0.5 translate-y-0.5  bg-white rounded-full"></div>
          </div>
          <span className="text-black md:text-xs md:font-normal ">
            Hotel
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3   rounded-full bg-orange-300">
            <div className="w-2 h-2  bg-white rounded-full   transform translate-x-0.5 translate-y-0.5 "></div>
          </div>
          <span className="text-black  md:text-xs md:font-normal">
            Other
          </span>
        </div>
      </div>
    </div>
  );
};
export default ReportTravel;
