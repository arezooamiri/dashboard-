import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string; // اگر پاسخ شامل توکن باشد
}


export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation<LoginResponse, Error, LoginData>({
    mutationFn: async (loginData: LoginData) => {
      const response = await fetch("http://127.0.0.1:8000/accounts/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include",
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
  
      return response.json();
    },
  
    onSuccess: (data) => {
      navigate("/dashboard");
    },
  
    onError: (error) => {
      setError(error.message || "An error occurred, please try again.");
    },
  });
  
    
  
  const handelLogin=(e:React.FormEvent)=>{
    e.preventDefault();
    mutation.mutate({ username: email, password });

  }
  const handelClick = () => {
    navigate("/singup");
  };

  return (
    <div className="flex text-indigo-950 justify-center items-center w-screen h-screen  bg-[url('background.jpg')] bg-cover ">
      <div className="w-1/4 h-3/4 border border-indigo-950  rounded-md bg-transparent shadow-2xl flex flex-col gap-6 items-center p-4">
        <h2 className="text-2xl font-bold p-4">Login Form </h2>
        <form className="flex flex-col gap-8 " onSubmit={handelLogin}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <input
            type="password "
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 p-6 bg-transparent  border-indigo-950 border rounded-lg"
          ></input>
        </form>
        <div className="text-sm font-bold flex w-full justify-between pl-4 pr-4">
          <button>Remember me </button>
          <button>Forget Password</button>
        </div>
        <button className="w-full h-1/12 bg-indigo-950 rounded-full text-white " onClick={handelLogin}>
          Login
        </button>
        <button className="font-bold text-white" onClick={handelClick}>
          Or Sing Up
        </button>
      </div>
    </div>
  );
}
