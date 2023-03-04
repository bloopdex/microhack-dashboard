import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";
import {
  MdHomeFilled,
  MdAnalytics,
  MdInsertDriveFile,
  MdMessage,
  MdOutlineSettings,
  MdOutlineLogin,
} from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import SideBarItem from "./SideBarItem";
import { ProfilePic } from "../assets/";
import { Dashboard } from "../pages";

function SideBar() {
  const SideBarItems = {
    Dashboard: MdHomeFilled,
    Analytics: MdAnalytics,
    Orders: MdInsertDriveFile,
    Messages: MdMessage,
    News: BsNewspaper,
    Settings: MdOutlineSettings,
  };

  return (
    <div className="fixed h-screen flex flex-col justify-between bg-main w-80">
      <div className="flex flex-col p-8 ">
        <SearchBar />
        <div className="mt-10 flex flex-col gap-2">
          {Object.keys(SideBarItems).map((title, index) => (
            <Link to={`/${title}`}>
              <SideBarItem title={title} Icon={SideBarItems[title]} />
            </Link>
          ))}
        </div>
      </div>
      <div className="h-20 p-4 border-t border-white bg-[#223767] flex flex-row justify-between items-center">
        <div className="w-12 h-12 rounded-full border-2 border-white">
          <img src={ProfilePic} alt="Profile Pic" />
        </div>
        <div className="flex flex-col justify-between ">
          <p className="text-white text-md font-bold">Cameron Williamson</p>
          <p className="text-white text-sm">cameron.will@example.com</p>
        </div>
        <Link to="/">
          <MdOutlineLogin
            size={25}
            className="fill-white hover:fill-red-600 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
