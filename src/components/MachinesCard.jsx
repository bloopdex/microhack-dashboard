import React from "react";

function MachinesCard({ imgPath, name, id, state, mtbf }) {
  return (
    <div className="col-span-1 w-full p-8 rounded-3xl grid grid-cols-1 md:grid-cols-5 border-2 border-grey">
      <div className="md:col-span-2 h-full rounded-xl">
        <img src={imgPath} alt="" className="w-full rounded-xl" />
      </div>
      <div className="md:col-span-3 h-full flex flex-col justify-between px-4 lg:px-10">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="grid grid-cols-2 gap-4 text-center">
          <h1 className="rounded-lg p-1 border-2 border-grey ">ID</h1>
          <h1 className="rounded-lg p-1 border-2 border-main ">{`#${id}`}</h1>
          <h1 className="rounded-lg p-1 border-2 border-grey ">STATE</h1>
          <h1
            className={`p-1 rounded-lg border-2 ${
              state > 75
                ? "border-[#45B56E] text-[#45B56E]"
                : state > 25
                ? "border-[#FABB58] text-[#FABB58]"
                : "border-[#F36F56] text-[#F36F56]"
            }`}
          >
            {state}
          </h1>
          <h1 className="rounded-lg p-1 border-2 border-grey ">MTBF</h1>
          <h1 className="rounded-lg p-1 border-2 border-[#7D97F4] text-[#7D97F4] ">{`${mtbf} h`}</h1>
        </div>
        <h1 className="self-center text-cta cursor-pointer font-bold text-2xl">
          View More
        </h1>
      </div>
    </div>
  );
}

export default MachinesCard;
