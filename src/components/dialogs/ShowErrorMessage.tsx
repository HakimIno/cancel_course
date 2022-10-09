import React from "react";
// import svgs from "../../constants/svg";
const ShowErrorMessage: React.FC<{
  show: boolean;
  onHide: () => void;
  icon?: string;
  title?: string;
  message?: string;
}> = ({ show, onHide, icon, message, title }) => {
//   const iconText = icon || svgs.alertIcon;
  const titleMsg = title || "Error messages";
  const errorMsg = message || "Something went wrong.";
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } justify-center items-center fixed bg-to top-0 left-0 w-screen h-screen`}
      onClick={onHide}
      style={{ backgroundColor: "rgba(0,0,0, 0.3)" }}
    >
      <div className="bg-card w-80 shadow-lg shadow-gray-400 rounded-t">
        <div className="bg-button flex justify-between items-center pl-2 rounded-t">
          <small className=" text text-gray-300">{titleMsg}</small>
          <button
            className=" text-white mt-auto bg-red-700 px-2 rounded-tr"
            onClick={onHide}
            type="button"
          >
            x
          </button>
        </div>
        <div className="p-2">
          <div className="flex pb-5 text-gray-600 font-light items-center">
            {/* <img src={iconText} alt="alert-icon" className="mr-2" /> */}
            <span className=" text-sm">{errorMsg}</span>
          </div>
          <hr />
          <div className="flex justify-end">
            <button
              className=" shadow p-1  px-5 text-xs rounded text-cellint border border-cellint  mt-2"
              onClick={onHide}
              type={"button"}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowErrorMessage;
