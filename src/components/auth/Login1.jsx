import { useState } from "react";

const Login1 = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="bg-[#1f1d1d] border-2 p-5">
        <h2 className="text-white text-xl font-extrabold mt-3">Log In</h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col justify-center  gap-3 h-[65vh] w-[20vw] "
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-full bg-transparent outline-none border border-red-400 rounded-full py-1 px-4 text-gray-200 placeholder:text-gray-400 "
            type="email"
            placeholder="Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" w-full bg-transparent outline-none border border-red-400 rounded-full py-1 px-4 text-gray-200 placeholder:text-gray-400 "
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between">
            <div className="flex">
              <input
                type="checkbox"
                className="cursor-pointer rounded-2xl ms-3 border-2 border-gray-400 bg-transparent "
              />
              <label className="text-gray-400 select-none cursor-pointer ms-3">
                Remember me
              </label>
            </div>
            <button className="text-red-400 cursor-pointer">
              forget password
            </button>
          </div>
          <button className=" font-bold mt-7 w-full bg-red-500 border-none  rounded-full py-2 px-4 text-gray-200 cursor-pointer ">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login1;
