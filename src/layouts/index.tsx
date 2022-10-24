import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <div className="bg-yellow-500 pb-1"></div>
      <section className="p-4 bg-white">
        <div
          style={{ maxWidth: 1440 }}
          className=" flex gap-3 justify-content-between align-items-start mx-auto"
        >
          <Link to={"/"} className="flex gap-3 no-underline text-gray-900">
            <img
              src="https://upload.wikimedia.org/wikipedia/th/a/a9/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A0%E0%B8%B1%E0%B8%8F%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9.png"
              alt=""
              className="bg-white"
              width={50}
            />
            <div className=" pl-3 border-left-1">
              <h3 className=" m-0 p-0">สำนักงานทะเบียน</h3>
              <span>มหาวิทยาลัยราชภัฏศรีสะเกษ</span>
            </div>
          </Link>
          <div>
            <small className="block font-bold cursor-pointer">ออกจากะบบ</small>
          </div>
        </div>
      </section>
      <div className="overflow-x-scroll">
        <div style={{ maxWidth: 1440 }} className="mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
