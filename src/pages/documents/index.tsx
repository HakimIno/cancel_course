import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormProvider from "../../components/forms/FormProvider";
import Input from "../../components/forms/Input";
import Redio from "../../components/forms/Redio";
import { useActivity } from "../../hooks/useActivity";
import { usePetition } from "../../hooks/usePetition";
import { InputNumber, InputNumberChangeParams } from "primereact/inputnumber";


const DocumentPage = () => {
  const { methods, createOne, handleSubmit, errors, itemFields, petitions } =
    useActivity();

  const [paymentMethod, setPaymentMethod] = useState<string>("1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [displayBasic, setDisplayBasic] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("center");
  const [inputValues, setInputValues] = useState<number[]>([]);

  const resultInput = inputValues.reduce((a, b) => a + b, 0)

  const result = resultInput * 50

  const onClick = () => {
    setDisplayBasic(true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = () => {
    setDisplayBasic(false);
  };

  const handleChange = (
    i: number | null,
    event: InputNumberChangeParams
  ) => {
    
      const newInputValues: number[] | null = [...inputValues];
      newInputValues[i] = event.value;
      setInputValues(newInputValues);

  };


  const renderFooter = () => {
    return (
      <div>
        <Button
          label="ยกเลิก"
          icon="pi pi-times"
          onClick={() => onHide()}
          className="p-button-text"
        />
        <Link to={`1/create?payment=${paymentMethod}`} className="no-underline">
          <Button
            label="ยืนยัน"
            icon="pi pi-check"
            onClick={() => onHide()}
            autoFocus
          />
        </Link>
      </div>
    );
  };

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
                  valueProps={phoneNumber}
                  onChangeProps={setPhoneNumber}
                />
              </div>
              <div className="col-6">
                <Input
                  label={"อีเมลล์"}
                  name={"email"}
                  props={{ type: "email" }}
                  valueProps={email}
                  onChangeProps={setEmail}
                />
              </div>
              <div className="col-12">
                <Input
                  label={"ที่อยู่"}
                  name={"email"}
                  props={{ type: "email" }}
                  valueProps={address}
                  onChangeProps={setAddress}
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
                    <div className="field col-12 md:col-3">
                      <label htmlFor="minmax-buttons">
                        {petition?.name} {petition?.price}
                      </label>
                    
                        <InputNumber
                          inputId="minmax-buttons"
                          value={inputValues[i]}
                          key={i}
                          onChange={(event) => handleChange(i, event)}
                          mode="decimal"
                          showButtons
                          min={0}
                          max={10}
                        />;
                    
                    </div>
                  </div>
                );
              })}
            </div>

            <span>ราคารวมทั้งหมด: {result} บาท</span>
          </div>
        </FormProvider>
        <div className="card mt-4">
          <Button
            label="ยื่นคำร้องขอเอกสารทางศึกษา"
            onClick={() => onClick()}
          />
          <Dialog
            header="Header"
            visible={displayBasic}
            onHide={() => onHide()}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw"  }}
            footer={renderFooter()}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
