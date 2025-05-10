const ReportTravel = () => {
  return (
    <div className="flex flex-col col-auto rounded-md p-2">
      <span className="text-base text-gray-400">Expenses</span>
      <div className="flex flex-col items-center justify-center text-white  absolute  p-6 ">
        <div
          className="   w-24 h-24 rounded-full  flex justify-center items-center"
          style={{ backgroundColor: "rgba(2, 175, 114, 0.6)" }}
        >
          60%
        </div>
        <div
          className="  relative w-20 h-20 rounded-full flex justify-center items-center  z-10 right-8 bottom-6"
          style={{ background: "linear-gradient(to right, #6C50FC, #6C50FC)" }}
        >
          30%
        </div>
        <div className=" relative w-15 h-15 rounded-full bg-orange-300 flex justify-center items-center bottom-28 left-12 -z-10">
          10%
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex "><div className="w-4 h-4 rounded-full
         bg-green-500"></div> </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default ReportTravel;
