import { DataTablePFSEvent } from "primereact";
import React from "react";
import OrderPetitionTable from "../../sections/documents/OrderPetitionTable";

const ApproverHomePage = () => {
  return (
    <div className="bg-white my-5 p-5 ">
      <div className="pb-3 flex align-items-center justify-content-between">
        <h3 className="m-0 p-0">คำร้องทั้งหมด</h3>
      </div>
      <OrderPetitionTable />
    </div>
  );
};

export default ApproverHomePage;
