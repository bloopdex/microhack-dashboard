import React from "react";
import { SideBar, Optimization } from "../components";
import { MdNotifications } from "react-icons/md";
import Message from "../components/Message";

function Chat() {
  const pfps = [
    "/pfp/1.png",
    "/pfp/2.png",
    "/pfp/3.png",
    "/pfp/4.png",
    "/pfp/5.png",
    "/pfp/6.png",
    "/pfp/7.png",
    "/pfp/8.png",
  ];
  const names = [
    "Zack Fox",
    "Aaran",
    "Aarez",
    "Aarman",
    "Aaron",
    "Aaron-James",
    "Aaryan",
    "Aaryn",
  ];
  const messages = [
    "brings eternal shame to his family",
    "critically misses",
    "shoots at the sky",
    "shoots himself in the foot",
    "jams his rifle",
    "has a bullet explode in his rifle",
    "breaks his rifle in half",
    "hits himself in the head with recoil",
    "misses badly",
  ];
  const times = [
    "10:49 AM",
    "10:59 AM",
    "11:49 AM",
    "12:49 AM",
    "1:49 AM",
    "2:49 AM",
    "3:49 AM",
    "4:49 AM",
    "5:49 AM",
  ];
  const nbrMessages = [2, 0, 4, 5, 6, 0, 10, 12, 15];

  return (
    <div className="h-screen w-screen flex flex-row justify-between">
      <SideBar />
      <div className="flex flex-col gap-4 w-full p-14 ml-[20rem] overflow-x-hidden">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">The machines's Analytics</h1>
          <MdNotifications size={30} />
        </div>
        {pfps.map((pfp) => (
          <div className="flex flex-col gap-2">
            <Message
              pfp={pfp}
              name={names[pfps.indexOf(pfp)]}
              message={messages[pfps.indexOf(pfp)]}
              time={times[pfps.indexOf(pfp)]}
              nbrMessages={nbrMessages[pfps.indexOf(pfp)]}
            />
            <div className="mx-32 border border-grey"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
