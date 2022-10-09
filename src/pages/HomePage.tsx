import React from "react";
import CardTopic, { CardTopicProps } from "../components/pages/homes/CardTopic";
const card_topics: CardTopicProps[] = [
  {
    title: "ขอเอกสารสำคัญทางการศึกษา",
    path: "documents",
  },
  {
    title: "สำเร็จการศึกษา",
    path: "graduate",
  },
  {
    title: "ตรวจสอบวุฒิ",
    path: "qualifications",
  },
  {
    title: "ลงทะเบียนเรียนร่วม / เรียนซ้ำ / ยกเลิกรายวิชา",
    path: "join",
  },
  {
    title: "เทียบโอนรายวิชา / ยกเว้นรายวิชา",
    path: "tranfer",
  },
  {
    title: "คำร้อง / แบบฟอร์ม",
    path: "form",
  },
];
const HomePage = () => {
  return (
    <div className="grid p-3">
      {card_topics.map((topic) => (
        <div className="col-4" key={topic.title}>
          <CardTopic title={topic.title} path={topic.path} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
