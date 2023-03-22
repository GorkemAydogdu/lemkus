import React from "react";

const Backdrop = (props) => {
  return (
    <div onClick={props.onClick} className={props.className}>
      {props.children}
    </div>
  );
};

export default Backdrop;
