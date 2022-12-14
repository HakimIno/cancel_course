import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import FormProvider from "../../components/forms/FormProvider";
import Redio from "../../components/forms/Redio";
import { useActivity } from "../../hooks/useActivity";
import CheckPetitionTable from "../../sections/checks/CheckPetitionTable";
import OrderPetitionTable from "../../sections/documents/OrderPetitionTable";
import PetitionMenuList from "../../sections/documents/PetitionMenuList";

const CheckPage = () => {
  const { methods, createOne, handleSubmit, errors, itemFields, petitions } =
    useActivity();

  const [value11, setValue11] = useState(null);

  const cities = [
    { name: "ขอเอกสารทางการศึกษา" },
    { name: "ขอยกเลิกรายวิชา"},
   
  ];
  return (
    <div className="m-3 p-3 border-round bg-white h-screen">
      <div className="mx-auto " style={{ maxWidth: "1280px" }}>
        <div className="border-1 border-gray-400 p-5">
          <div className="">
            <b>ข้อมูลนักศึกษา</b>
          </div>
          <div className="grid grid-nogutter p-2 row-gap-2">
            <div className=" col-6">
              <b>รหัสนักศึกษา: </b>
              <span>6210014103</span>
            </div>
            <div className=" col-6">
              <b>ชื่อ - สกุล: </b>
              <span>นายปรัชญา มณีโชติ</span>
            </div>
            <div className=" col-6">
              <b>สาขาวิชา: </b>
              <span>วิศวกรรมซอฟต์แวร์</span>
            </div>
            <div className=" col-6">
              <b>สถานะนักศึกษา: </b>
              <span>กำลังศึกษาอยู่</span>
            </div>
          </div>
        </div>
        <FormProvider methods={methods} onSubmit={handleSubmit(createOne)}>
          <div className="col-12 mt-3">
            <Redio
              options={[
                {
                  label: "ขอเอกสารทางการศึกษา",
                  value: "PICK",
                },
                {
                  label: "ขอยกเลิกรายวิชา",
                  value: "EXIT",
                },
              ]}
              onChange={() => {}}
              name={"channal_receiving"}
            />
          </div>
          <CheckPetitionTable />
        </FormProvider>
       {/*  <div className="field col-12 md:col-4">
          <span className="p-float-label">
            <Dropdown
              inputId="dropdown"
              value={value11}
              options={cities}
              onChange={(e) => setValue11(e.value)}
              optionLabel="name"
            />
            <label htmlFor="dropdown">ประเภทคำร้อง</label>
          </span>
        </div> */}
       
        {/* <PetitionMenuList/> */}
        
      </div>
      
    </div>
  );
};

export default CheckPage;
