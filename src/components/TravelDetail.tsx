import Destantion from "./Destantion";
import People from "./People";
import TravelDate from "./TravelDate";

export default function TravelDetail() {
  return (
    <div className="col-start-1 col-end-5 w-full flex gap-4 ">
      <TravelDate />
      <People />
      <Destantion />
    </div>
  );
}
