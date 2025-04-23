import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/singup");
  };
  return (
    <div className="flex text-indigo-950 justify-center items-center w-screen h-screen  bg-[url('background.jpg')] bg-cover ">
      <div className="w-1/4 h-3/4 border border-indigo-950  rounded-md bg-transparent shadow-2xl flex flex-col gap-6 items-center p-4">
        <h2 className="text-2xl font-bold p-4">Login Form </h2>
        <form className="flex flex-col gap-8 ">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <input
            type="password "
            placeholder="Password"
            className="w-full h-10 p-6 bg-transparent  border-indigo-950 border rounded-lg"
          ></input>
        </form>
        <div className="text-sm font-bold flex w-full justify-between pl-4 pr-4">
          <button>Remember me </button>
          <button>Forget Password</button>
        </div>
        <button className="w-full h-1/12 bg-indigo-950 rounded-full text-white ">
          Login
        </button>
        <button className="font-bold text-white" onClick={handelClick}>
          Or Sing Up
        </button>
      </div>
    </div>
  );
}
