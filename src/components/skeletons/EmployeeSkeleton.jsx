import React from "react";
import Element from "./Element";
import Swipper from "./Swipper";

const EmployeeSkeleton = ({ style }) => {
  return (
    <div className="skeleton-wrapper" style={style || ""}>
      <div className="employee-skeleton">
        <Element type="title" />
        <Element type="text" />
        <Element type="text" />
      </div>
      <Swipper />
    </div>
  );
};

export default EmployeeSkeleton;
