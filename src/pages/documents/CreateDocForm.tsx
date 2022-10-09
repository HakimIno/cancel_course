import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sign from "../../components/papers/Sign";
import ApproveCard from "../../components/papers/ApproveCard";
import { Study } from "../../components/papers/Study";
import Header from "../../components/papers/Header";
import { usePrint } from "../../hooks/usePrint";
import { Button } from "primereact/button";
const CreateDocForm = () => {
  const { handlePrint, componentRef } = usePrint();
  const params = useParams();
  return (
    <div className=" flex justify-content-center flex-column align-items-center">
      <div className="flex justify-content-end py-2">
        <Button
          icon={"pi pi-print"}
          label="Print"
          className="p-button-sm p-button-warning"
          onClick={handlePrint}
        />
      </div>
      <div
        ref={componentRef}
        className="bg-white p-5 px-7 relative"
        style={{
          width: "21cm",
          height: "29.7cm",
        }}
      >
        <Header />
        {/* 2 */}
        <div className="mt-5">
          <b>เรียน</b>
          <span className="ml-3">อธิการบดีมหาวิทยาลัยราชภัฏศรีสะเกษ</span>
          <Study
            name={""}
            eng_name={""}
            birth_date={""}
            phone={""}
            study_type={""}
            study_level={""}
            study_id={""}
            study_course={""}
            study_branch={""}
          />
        </div>
        {/* 3 */}
        <div>
          <b>มีความประสงค์ยื่นขอเอกสาร</b>
          <div className="pl-3">เอกสาร {params.petitionId}</div>
        </div>
        {/* 4 */}
        <Sign role="นักศึกษา" className="mt-5" />
        {/* 5 */}
        <div className="grid">
          <ApproveCard role="งานทะเบียน" className="mt-5" />
          <ApproveCard role="งานทะเบียน" className="mt-5" />
        </div>
        {/* 6 */}
        <Sign role="งานทะเบียน" className="mt-5" />
      </div>
    </div>
  );
};

export default CreateDocForm;
