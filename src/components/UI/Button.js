import React from "react";

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      disabled={props.disabled}
      name={props.name}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </button>
  );
});

export default Button;
