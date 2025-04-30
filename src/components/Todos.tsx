import { useState } from "react";
import SortIcon from "../assets/icon/SortIcon";

export default function Todos() {
    const [selectTodo,setSelectTodo]=useState('')
  const Task = [
    {
      id: "1",
      taskname: "Elit est nibh cras phasellus scelerisque orci",
      assinge: " Artur",
      prioty: "Meduim ",
    },
    {
      id: "2",
      taskname: "Urna nibh eget facilisis egestas mi",
      assinge: "Marta",
      prioty: "Meduim",
    },
    {
      id: "3",
      taskname: "Enim tincidunt orci curabitur habitant",
      assinge: "Artur",
      prioty: "Meduim ",
    },
    {
      id: "4",
      taskname:"Sed condimentum magnis  bibendum",
      assinge:"Marta",
      prioty: "High",
    },
  ];

  return (
    <div className="col-start-2 col-end-5 pl-4 ">
      <div className="flex justify-between">
        <span className=" font-bold text-lg">To do's</span>
        <div className="flex gap-2 items-center">
          {" "}
          <span>Sort</span>
          <SortIcon />
        </div>
      </div>
      <div className="flex gap-6 font-normal text-sm text-gray-400 pt-8">
        <span>#</span>
        <span className=" grow">Task Name</span>
        <span>Assignee</span>
        <span>Piorety</span>
      </div>
      <div className=" flex flex-col gap-4 pt-8 text-sm font-medium">
      {Task.map((item,index)=>(
            <button key={index} className={`task flex gap-6 font-light p-2 items-center cursor-pointer  ${item.id===selectTodo ? 'bg-white  rounded-xl  shadow-lg' :''}` } onClick={()=>setSelectTodo(item.id)}>
                <div className="p-2" >{item.id}</div>
                <div className=" grow">{item.taskname}</div>
                <div>{item.assinge}</div>
                <div className="text-white text-xs bg-amber-600 p-2 font-medium rounded-full">{item.prioty}</div>
       
            </button>
      ))}
      </div>
      
    </div>
  );
}
