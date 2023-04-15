import React, { forwardRef } from "react";

const ButtonStatic = forwardRef((props, ref) => {
  return (
    <span ref={ref} className="static">
      {props.children}
    </span>
  );
});

export default ButtonStatic;
