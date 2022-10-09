import React from "react";

const Sign: React.FC<{
  role: string;
  className?: string;
}> = ({ role, className }) => {
  return (
    <div className={`text-center ${className}`}>
      ลงชื่อ................................................{role}
      <p>.........../.............../...........</p>
    </div>
  );
};

export default Sign;
