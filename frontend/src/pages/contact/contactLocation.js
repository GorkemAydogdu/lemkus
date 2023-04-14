import React, { useRef } from "react";

const ContactLocation = () => {
  const viewAllStatic = useRef();
  const viewAllHover = useRef();
  const mouseEnterHandler = () => {
    viewAllHover.current.style.display = "inline-block";
    viewAllStatic.current.style.display = "none";
  };

  const mouseLeaveHandler = () => {
    viewAllHover.current.style.display = "none";
    viewAllStatic.current.style.display = "inline-block";
  };

  return (
    <div className="contact__location">
      <h4 className="contact__heading--4">LOCATION</h4>
      <p className="contact__location--address">
        Jack Lemkus Store, 26 St Georges Mall, Cape Town
      </p>
      <a
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        href="https://www.google.com/maps/dir//Jack+Lemkus,+26a+St+Georges+Mall,+Cape+Town+City+Centre,+Cape+Town,+8000/@-33.9209633,18.4230041,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1dcc6763e0f8345f:0xf9028c11e332f35e!2m2!1d18.4230041!2d-33.9209633"
        className="contact__location--link"
      >
        <span ref={viewAllStatic} className="static">
          GET DIRECTIONS
        </span>
        <span ref={viewAllHover} className="hover">
          GET DIRECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET
          DIRECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </a>
    </div>
  );
};

export default ContactLocation;
