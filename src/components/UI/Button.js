import React from "react";

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
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
