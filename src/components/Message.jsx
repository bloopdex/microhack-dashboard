import React from "react";

function Message({ pfp, name, message, time, nbrMessages }) {
  return (
    <div className="flex flex-row justify-between items-center cursor-pointer">
      <div className="flex flex-row items-center gap-2">
        <img src={pfp} alt="" className="rounded-full h-full p-2" />
        <div className="flex flex-col gap-1 items-start">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-light">{message}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <p className="font-light text-grey ">{time}</p>
        <div className="p-2 bg-grey rounded-full w-8 h-8 flex items-center justify-center">
          <p className="font-light text-black">{nbrMessages}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
