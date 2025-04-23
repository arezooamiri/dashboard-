export default function LoginForm() {
  return (
    <div className="flex text-white justify-center items-center w-screen h-screen  bg-[url('background.jpg')] bg-cover ">
      <div className="w-1/4 h-3/4 border border-white rounded-md bg-transparent shadow-2xl flex flex-col gap-4 items-center p-4">
        <h2 className="text-2xl font-bold p-4">Login Form </h2>
        <form className="flex flex-col gap-6 ">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-10 p-6 bg-transparent border-white border rounded-lg"
          ></input>
          <input
            type="password "
            placeholder="Password"
            className="w-full h-10 p-6 bg-transparent border-white border rounded-lg"
          ></input>
        </form>
        <div className="text-sm flex w-full justify-between pl-4 pr-4">
          <button>Remember me </button>
          <button>Forget Password</button>
        </div>
        <button className="w-full h-1/12 bg-white rounded-full text-black ">Login</button>
        <button>Or Sing Up</button>
      </div>
    </div>
  );
}
