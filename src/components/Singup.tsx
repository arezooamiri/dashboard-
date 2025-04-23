import { useNavigate } from "react-router-dom";

export default function Singup() {
  const navigate = useNavigate();

  const handelCick = () => {
    navigate("/login");
  };
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-[url('background.jpg')] bg-cover">
      <div className="w-1/4 h-3/4 border border-indigo-950  rounded-md bg-transparent shadow-2xl flex flex-col gap-6 items-center p-4">
        <h2 className="text-2xl font-bold p-4">Sing Up</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 p-6 bg-transparent  border  border-indigo-950  rounded-lg"
          ></input>
          <button className="bg-indigo-950 p-2 rounded-lg text-white">
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
