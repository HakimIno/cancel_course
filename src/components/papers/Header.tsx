import React from "react";

const Header = () => {
  return (
    <>
      <div className="absolute border-2 p-1" style={{ right: "20%", top: 30 }}>
        คร. 1
      </div>
      <div className=" flex flex-column align-items-center">
        <div id="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/th/a/a9/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A0%E0%B8%B1%E0%B8%8F%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9.png"
            alt=""
            className=" bg-white"
            width={70}
          />
        </div>
        <b>มหาวิทยาลัยราชภัฏศรีสะเกษ</b>
        <b>คำร้องทั่วไป</b>
      </div>
      {/* 1 */}
      <div className="grid">
        <div className="col"></div>
        <div className="col">
          <div className="text-right">
            <p>
              <b>เขียนที่ มหาวิทยาลัยราชภัฏศรีสะเกษ</b>
            </p>
          </div>
          <p>
            วันที่ {new Date().getDate()} เดือน {new Date().getMonth()}
            พ.ศ.&nbsp;&nbsp;
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
