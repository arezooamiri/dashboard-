export default function LoginForm() {
  return (
    <div className="flex justify-center items-center w-screen h-screen  bg-[url('background.jpg')] bg-cover ">
      <div className="w-1/4 h-3/4  bg-transparent shadow-2xl flex flex-col gap-8 items-center p-4">
        <h2 className="text-2xl font-bold text-white">Login Form </h2>
        <form>
          <input
            type="email"
            placeholder="you@example.com"
            className="bg-white w-full h-10 p-6 "
          ></input>
        </form>
      </div>
    </div>
  );
}
