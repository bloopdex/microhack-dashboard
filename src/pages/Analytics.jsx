import React from "react";
import { SideBar, Optimization } from "../components";
import { MdNotifications } from "react-icons/md";
import MachinesCard from "../components/MachinesCard";

function Analytics() {
  const images = [
    "/machines/1.png",
    "/machines/2.png",
    "/machines/3.png",
    "/machines/4.png",
    "/machines/5.png",
    "/machines/6.png",
  ];
  const names = [
    "Gas compressor",
    "Metering system",
    "Storage tank",
    "Sweetening unit",
    "Processing plant",
    "Dehydration unit",
  ];
  const ids = [311, 312, 313, 314, 315, 316];
  const states = [93, 47, 33, 84, 23, 42];
  const mtbfs = [3000, 4000, 5000, 6000, 1000, 2000];

  return (
    <div className="h-screen w-screen flex flex-row justify-between">
      <SideBar />
      <div className="flex flex-col gap-4 w-full p-14 ml-[20rem] overflow-x-hidden">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">The machines's Analytics</h1>
          <MdNotifications size={30} />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div></div>
          <h1 className="justify-end text-cta text-xl font-bold cursor-pointer">
            Switch to table view
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full ">
          {images.map((image) => (
            <MachinesCard
              id={ids[images.indexOf(image)]}
              imgPath={image}
              name={names[images.indexOf(image)]}
              state={states[images.indexOf(image)]}
              mtbf={mtbfs[images.indexOf(image)]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
