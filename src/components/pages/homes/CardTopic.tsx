import { Card } from "primereact/card";
import React from "react";
import { Link } from "react-router-dom";
export interface CardTopicProps {
  title: string;
  path: string;
  icon?: string;
}
const CardTopic: React.FC<CardTopicProps> = ({ title, path }) => {
  return (
    <Link to={path} className=" no-underline">
      <Card className="h-10rem flex justify-content-center align-items-center">
        <b className="no-underline"> {title}</b>
      </Card>
    </Link>
  );
};

export default CardTopic;
