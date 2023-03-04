import React from "react";
import { SideBar } from "../components";
import { MdNotifications } from "react-icons/md";
import Table from "../components/Table";
import tableData from "../tableData1.json";

function Orders() {
  const columns = [
    { label: "", accessor: "" },
    { label: "Picture", accessor: "pic", sortable: false },
    { label: "Name", accessor: "name", sortable: true },
    {
      label: "Arrival date",
      accessor: "arrival_date",
      sortable: true,
      sortbyOrder: "desc",
    },
    { label: "Status", accessor: "status", sortable: true },
  ];

  return (
    <div className="h-screen w-screen flex flex-row justify-between">
      <SideBar />
      <div className="flex flex-col gap-4 w-full p-14 ml-[20rem] overflow-x-hidden">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Orders</h1>
          <MdNotifications size={30} />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div></div>
          <h1 className="justify-end text-cta text-xl font-bold cursor-pointer">
            Switch to table view
          </h1>
        </div>
        <div className="w-full overflow-auto">
          <Table caption={""} columns={columns} data={tableData} />
        </div>
      </div>
    </div>
  );
}

export default Orders;
