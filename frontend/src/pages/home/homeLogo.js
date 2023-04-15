import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const HomeLogo = () => {
  return (
    <div className="logo">
      <a href="/">
        <Logo />
      </a>
    </div>
  );
};

export default HomeLogo;
