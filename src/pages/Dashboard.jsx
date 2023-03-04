import React from "react";
import { SideBar, Optimization } from "../components";
import { MdNotifications } from "react-icons/md";
import { RequestChart } from "../components/RequestsChart";
import { FailuresChart } from "../components/FailursChart";

function Dashboard() {
  const titles = ["Amount Optimized", "Amount Of", "Request Number"];
  const costs = ["31.998,00 Da", "375,11 375,11 $", "130"];
  const gains = [13, 1.1, -5];

  return (
    <div className="h-screen w-screen flex flex-row justify-between">
      <SideBar />
      <div className="flex flex-col gap-4 w-full p-14 ml-[20rem]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Overview</h1>
          <MdNotifications size={30} />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {titles.map((title) => (
            <Optimization
              title={title}
              cost={costs[titles.indexOf(title)]}
              gain={gains[titles.indexOf(title)]}
            />
          ))}
          <div className="col-span-1 p-4 rounded-3xl border border-grey flex flex-col gap-2 justify-between items-start">
            <p className="text-[#809FB8] text-lg">
              The quantity of malfunctioning pieces
            </p>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600 text-3xl font-bold">12</h1>
              <h1 className="text-red-600 text-xl font-bold cursor-pointer">
                View all.
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full h-96 flex flex-row justify-center">
          <RequestChart />
        </div>
        <div className="w-full grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-1">
            <div className="w-full flex flex-row justify-between">
              <h1 className="text-lg font-bold">Failures detected</h1>
              <p className="text-sm font-light">Monthly</p>
            </div>
            <FailuresChart color={"#F6C77D"} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full flex flex-row justify-between">
              <h1 className="text-lg font-bold">Failures detected</h1>
              <p className="text-sm font-light">Monthly</p>
            </div>
            <FailuresChart color={"#16A34A"} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full flex flex-row justify-between">
              <h1 className="text-lg font-bold">Failures detected</h1>
              <p className="text-sm font-light">Monthly</p>
            </div>
            <FailuresChart label={["Good", "Medium", "Bad"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
