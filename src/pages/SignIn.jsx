import React from "react";
import { Link } from "react-router-dom";
import { SignInPic } from "../assets/index";

function SignIn() {
  return (
    <div className="bg-cta w-screen h-screen grid grid-cols-3">
      <div className="hidden col-span-1 h-full md:flex flex-col justify-around items-center p-10">
        <div>
          <h1 className="text-white text-2xl font-bold">Predictive Insights</h1>
          <h1 className="text-main text-2xl font-bold">Proactive Solutions</h1>
        </div>
        <div className="w-full lg:p-10 p-1">
          <img src={SignInPic} alt="Sign In" />
        </div>
      </div>
      <div className="bg-white col-span-full md:col-span-2 h-full flex flex-col justify-around items-center p-10 md:rounded-tl-[4rem] md:rounded-bl-[4rem]">
        <h1 className="text-[4rem] font-bold text-main">Sign In</h1>
        <div>
          <form className="flex flex-col justify-around items-start h-72 p-10 rounded-3xl border-2 border-grey ">
            <div className="">
              <label htmlFor="username" className="">
                Username
              </label>
              <input
                type="text"
                placeholder="username.exemple"
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                type="password"
                placeholder="*******************"
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1"
              />
            </div>
          </form>
          <div className="p-10">
            <Link to={"Dashboard"}>
              <button className="w-full bg-cta text-main font-bold rounded-xl p-4">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <h1 className="text-grey text-center">
          Have issues connecting to your account?
          <br />
          <span className="font-bold text-xl text-main cursor-pointer">
            Contact us now
          </span>
        </h1>
      </div>
    </div>
  );
}

export default SignIn;
