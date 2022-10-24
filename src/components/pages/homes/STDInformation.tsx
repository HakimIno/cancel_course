import React from "react";
export interface ISTDInformation {
  label: string;
  value?: string;
}
const STDInformation: React.FC<{ informations: ISTDInformation[] }> = ({
  informations,
}) => {
  return (
    <div>
      <div className="grid py-3">
        {informations.map((information) => (
          <div className="col-12 md:col-6 lg:col-4">
            <b>
              {information.label} : {information.value}
            </b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default STDInformation;
