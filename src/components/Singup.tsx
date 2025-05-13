import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type SingupPayload={
  username:string;
  password:string;
}
export default function Singup() {
  const navigate = useNavigate();
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const mutation=useMutation<void,Error,SingupPayload>({
    mutationFn:async(payload)=>{
      const response=await fetch("http://127.0.0.1:8000/accounts/register/"
      ,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload)

      })
      const data=await response.json();
      if(!response.ok){
        throw data;
      }
      return data;
    },
    onSuccess:(data)=>{
      console.log("Signup success ✅", data);
      navigate("/login");
    },
    onError: (error) => {
      console.error("Signup failed ❌", error);
      alert("Signup failed: " + JSON.stringify(error));
    },
  })

  const handelSingUp=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    mutation.mutate({
      username,
      password,

    })

  }
  const handelCick = () => {
    navigate("/login");
  };
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-[url('background.jpg')] bg-cover">
      <div className="w-1/4 h-3/4 border border-indigo-950  rounded-md bg-transparent shadow-2xl flex flex-col gap-6 items-center p-4">
        <h2 className="text-2xl font-bold p-4">Sing Up</h2>
        <form  onSubmit={handelSingUp} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value )}
            required
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <input
            type="email"
            value={email}
            placeholder="you@example.com"
            onChange={(e)=>setEmail(e.target.value)}
             required
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <button   type="submit"  className="bg-indigo-950 p-2 rounded-lg text-white">
            Sing Up
          </button>
        </form>
        <div className="flex gap-2 text-xs">
          <span>Already you have an Account</span>
          <button onClick={handelCick} className="text-indigo-900">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
