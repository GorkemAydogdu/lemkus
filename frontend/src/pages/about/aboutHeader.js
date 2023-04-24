import React from "react";

import ScrollDown from "../../assets/scroll-down.svg";
import Arrow from "../../assets/arrow.svg";

const AboutHeader = () => {
  return (
    <div className="about__header">
      <div className="about__title uppercase">
        <span className="line">
          <span>E</span>
          <span>s</span>
          <span>t</span>
          <span>a</span>
          <span>b</span>
          <span>l</span>
          <span>i</span>
          <span>s</span>
          <span>h</span>
          <span>e</span>
          <span>d</span>
          <span>&nbsp;</span>
          <span>i</span>
          <span>n</span>
        </span>
        <span className="line">
          <span>1</span>
          <span>9</span>
          <span>3</span>
          <span>5</span>
        </span>
      </div>
      <div className="about__scrollDown">
        <ScrollDown />
        <Arrow />
      </div>
    </div>
  );
};

export default AboutHeader;
