import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email address"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
