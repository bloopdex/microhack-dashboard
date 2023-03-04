import React from "react";

function SideBarItem({ Icon, title }) {
  console.log(window.location.pathname);
  console.log(`/${title}`);
  return (
    <div
      className={`w-full flex flex-row align-center p-3 rounded-lg ${
        window.location.pathname === `/${title}` ||
        (window.location.pathname === "/" && title === "Dashboard")
          ? "bg-cta"
          : "hover:bg-sidebarhover"
      }`}
    >
      <Icon size={25} className="fill-white" />
      <h1 className="font-medium text-lg text-white ml-4">{title}</h1>
      {title === "Messages" ? (
        <div className="p-2 rounded-full text-main bg-white w-8 h-8 flex justify-center items-center ml-auto">
          2
        </div>
      ) : null}
    </div>
  );
}

export default SideBarItem;
