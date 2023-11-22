import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../utils/userQueries";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div class="text-center py-2">
        <h1 className="block text-gray-700 text-md font-bold mb-2">Sign Up</h1>
      </div>
      <div className="flex justify-center my-5">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email address"
              ></input>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
