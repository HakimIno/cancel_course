import React from "react";

export const Study: React.FC<{
  name: string;
  eng_name: string;
  birth_date: string;
  phone: string;
  study_type: string;
  study_level: string;
  study_id: string;
  study_course: string;
  study_branch: string;
}> = ({
  name,
  eng_name,
  birth_date,
  phone,
  study_type,
  study_level,
  study_id,
  study_course,
  study_branch,
}) => {
  return (
    <div>
      <p>
        <span className="ml-6"></span> ด้วยข้าพเจ้า
        <span className="px-2">{name}</span>
        (ชื่อภาษาอังกฤษ) <span className="px-2">{eng_name}</span>
        เกิดเมื่อวันที่
        <span className="px-2">{birth_date}</span> โทรศัพท์
        <span className="px-2">{phone}</span> ปัจจุบันเป็นนักศึกษาภาค
        <span className="px-2">{study_type}</span>
        ชั้นปีที่ <span className="px-2">{study_level}</span>
        รหัสประจําตัวนักศึกษา <span className="px-2">{study_id}</span> หลักสูตร
        <span className="px-2">{study_course}</span> สาขาวิชา
        <span className="px-2">{study_branch}</span>
      </p>
    </div>
  );
};
