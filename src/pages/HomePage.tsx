import React from "react";
import CardTopic, { CardTopicProps } from "../components/pages/homes/CardTopic";
import STDInformation, {
  ISTDInformation,
} from "../components/pages/homes/STDInformation";
import {
  bachelorsDegreePng,
  bookStackPng,
  documentsPng,
  graduateCapPng,
  registerPng,
  registrationFormPng,
} from "../constants/png";
const card_topics: CardTopicProps[] = [
  {
    title: "ขอเอกสารสำคัญทางการศึกษา",
    path: "documents",
    icon: documentsPng,
  },
  {
    title: "สำเร็จการศึกษา",
    path: "graduate",
    icon: graduateCapPng,
  },
  {
    title: "ตรวจสอบวุฒิ",
    path: "qualifications",
    icon: bachelorsDegreePng,
  },
  {
    title: "ลงทะเบียนเรียนร่วม / เรียนซ้ำ / ยกเลิกรายวิชา",
    path: "join",
    icon: registerPng,
  },
  {
    title: "เทียบโอนรายวิชา / ยกเว้นรายวิชา",
    path: "tranfer",
    icon: bookStackPng,
  },
  {
    title: "คำร้อง / แบบฟอร์ม",
    path: "form",
    icon: registrationFormPng,
  },
];
const std_informations: ISTDInformation[] = [
  { label: "รหัสนักศึกษา" },
  { label: "หมู่เรียน" },
  { label: "หน่วยกิตคำนวณ" },
  { label: "น้ำหนักคะแนน" },
  { label: "เข้าศึกษาเมื่อ" },
  { label: "หน่วยกิตลงทะเบียน:" },
  { label: "เกรดเฉลี่ยสะสม" },
  { label: "สถานะภาพ" },
  { label: "การตรวจสอบวุฒิ" },
  { label: "ยืนยันรูปภาพ" },
  { label: "อีเมลล์" },
];
const HomePage = () => {
  return (
    <div className="bg-white my-5 p-5 ">
      <div className="grid ">
        <div className="col-12">
          <STDInformation informations={std_informations} />
          <hr />
        </div>
        {card_topics.map((topic) => (
          <div className="col-12 md:col-6 lg:col-4" key={topic.title}>
            <CardTopic
              title={topic.title}
              path={topic.path}
              icon={topic.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
