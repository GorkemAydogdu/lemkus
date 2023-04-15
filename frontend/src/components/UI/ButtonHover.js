import React, { forwardRef } from "react";

const ButtonHover = forwardRef((props, ref) => {
  return (
    <span ref={ref} className="hover">
      {props.children}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  );
});

export default ButtonHover;
