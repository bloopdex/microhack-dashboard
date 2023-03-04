import React from "react";

function Optimization({ title, cost, gain }) {
  return (
    <div className="col-span-1 p-4 rounded-3xl border border-grey flex flex-col gap-2 justify-between items-start">
      <p className="text-[#809FB8] text-lg">{title}</p>
      <h1 className="text-main text-3xl font-bold">{cost}</h1>
      <p className="text-[#828282] text-xl">
        <span className={gain > 0 ? "text-green-500" : "text-red-600"}>
          {gain > 0 ? `+${gain}%` : `${gain}%`}
        </span>{" "}
        month to date
      </p>
    </div>
  );
}

export default Optimization;
