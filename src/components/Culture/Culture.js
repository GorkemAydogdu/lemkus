import React from "react";

//components
import CultureGroup from "./CultureGroup";
import CultureHeader from "./CultureHeader";

const Culture = () => {
  return (
    <div className="culture">
      <CultureHeader />
      <CultureGroup />
    </div>
  );
};

export default Culture;
