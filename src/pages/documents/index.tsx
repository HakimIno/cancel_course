import { Button } from "primereact/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormProvider from "../../components/forms/FormProvider";
import Input from "../../components/forms/Input";
import Redio from "../../components/forms/Redio";
import { useActivity } from "../../hooks/useActivity";
import { usePetition } from "../../hooks/usePetition";
const DocumentPage = () => {
  const { methods, createOne, handleSubmit, errors, itemFields, petitions } =
    useActivity();

  const [paymentMethod, setPaymentMethod] = useState<string>("1");
  return (
    <div className="m-3 p-3 border-round bg-white">
      {/* <OrderPetitionTable />
      <PetitionMenuList /> */}
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
          <div className="pt-5">
            <b>กรอกข้อมูล</b>
            <div className="grid">
              <div className="col-12">
                <small className="block p-error">
                  {errors.afterSubmit?.message}{" "}
                </small>
              </div>
              <div className="col-6">
                <Input
                  label={"เบอร์โทรศัพท์"}
                  name={"phone"}
                  props={{ type: "text" }}
                />
              </div>
              <div className="col-6">
                <Input
                  label={"อีเมลล์"}
                  name={"email"}
                  props={{ type: "email" }}
                />
              </div>
              <div className="col-12">
                <Input
                  label={"ที่อยู่"}
                  name={"email"}
                  props={{ type: "email" }}
                />
              </div>
              <div className="col-12">
                <Redio
                  options={[
                    {
                      label: "รับด้วยตนเอง",
                      value: "PICKUP",
                    },
                    {
                      label: "มอบฉันทะให้ผู้อื่นรับแทน (กรอกใบมอบฉันทะ)",
                      value: "PROXY",
                    },
                    {
                      label: "ส่งทางไปรษณีย์",
                      value: "POSTAL",
                    },
                  ]}
                  onChange={() => {}}
                  name={"channal_receiving"}
                />
              </div>
            </div>
            <b>เลือกการชำระเงิน</b>
            <Redio
              veticle
              options={[
                {
                  label: "โอนเข้าบัญชี",
                  value: "1",
                },
                {
                  label: "ชำระด้วยตนเอง",
                  value: "2",
                },
              ]}
              name={"payment"}
              onChange={(val) => {
                setPaymentMethod(val);
                console.log({ val });
              }}
            />
            <b>เลือกเอกสารที่ต้องการขอ</b>
            <div className="flex flex-column gap-2 py-2">
              {itemFields.map((item, i) => {
                const petition = petitions.find(
                  (p) => p.id === item.petition_id
                );
                return (
                  <div key={item.id}>
                    <div className="flex align-items-center gap-3">
                      <div style={{ width: 50 }} className="text-center">
                        <Input
                          name={`items.${i}.quantity`}
                          props={{ type: "number", min: 0 }}
                        />
                        {/* <small>จำนวน</small> */}
                      </div>
                      <span>
                        {petition?.name} <b>ฉบับละ</b> {petition?.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <b>ราคารวม</b>: 300
          </div>
        </FormProvider>
        <div className=" mt-4">
          <Link
            to={`1/create?payment=${paymentMethod}`}
            className="no-underline"
          >
            <Button label="ยื่นคำร้องขอเอกสารทางศึกษา" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
