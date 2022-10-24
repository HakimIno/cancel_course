import { Card } from "primereact/card";
import React from "react";
import { Link } from "react-router-dom";
export interface CardTopicProps {
  title: string;
  path: string;
  icon?: string;
}
const CardTopic: React.FC<CardTopicProps> = ({ title, path, icon }) => {
  return (
    <Link to={path} className="no-underline text-gray-600">
      <div className="h-16rem flex justify-content-center">
        <div className="grid justify-content-center w-19rem">
          <div className=" flex justify-content-center align-items-center">{icon && <img src={icon} className=" h-9rem" alt={title} />}</div>
          <b className="no-underline col-12 text-center"> {title}</b>
        </div>
      </div>
    </Link>
  );
};

export default CardTopic;
