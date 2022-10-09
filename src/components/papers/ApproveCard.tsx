import { Checkbox } from "primereact/checkbox";
import React from "react";
import Sign from "./Sign";

const ApproveCard: React.FC<{
  role: string;
  className?: string;
}> = ({ role, className }) => {
  return (
    <div className={`border-2 flex flex-column col-6 ${className}`}>
      <p>1. ความเห็นของ{role}</p>
      <div className=" flex gap-3">
        <div className="field-checkbox">
          <Checkbox
            inputId="approve"
            checked={false}
            // onChange={(e) => setChecked(e.checked)}
          />
          <label htmlFor="approve">อนุมัติ</label>
        </div>
        <div className="field-checkbox">
          <Checkbox
            inputId="approve"
            checked={true}
            // onChange={(e) => setChecked(e.checked)}
          />
          <label htmlFor="approve">ไม่อนุมัติ</label>
        </div>
      </div>
      <span>เนื่องจาก</span>
      <Sign role={role} className="mt-5" />
    </div>
  );
};

export default ApproveCard;
