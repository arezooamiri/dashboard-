import SideBar from "./Sidebar"



export default function AllTrip (){

    return(
        <div className=" grid grid-cols-5 gap-4 h-[100vh] p-4" >
              <SideBar/>
              <div>all trips </div>
        </div>
       
    )

}

