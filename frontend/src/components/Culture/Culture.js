import React from "react";

//components
import CultureGroup from "./CultureGroup";
import CultureHeader from "./CultureHeader";

const Culture = ({ news }) => {
  return (
    <div className="culture">
      <CultureHeader />
      <CultureGroup news={news} />
    </div>
  );
};

export default Culture;
