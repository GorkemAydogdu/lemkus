import React, { useRef, useEffect } from "react";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CultureHeader = () => {
  const viewAllStatic = useRef();
  const viewAllHover = useRef();

  useEffect(() => {
    gsap.from(".culture__title span", {
      y: "110%",
      opacity: 0,
      stagger: 0.03,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".culture__header",
        start: "top 75%",
        end: "top 80%",
      },
    });
  }, []);

  const mouseEnterHandler = () => {
    viewAllHover.current.style.display = "inline-block";
    viewAllStatic.current.style.display = "none";
  };

  const mouseLeaveHandler = () => {
    viewAllHover.current.style.display = "none";
    viewAllStatic.current.style.display = "inline-block";
  };

  return (
    <div className="culture__header">
      <span className="culture__title">
        {/* https://stackoverflow.com/a/57456211/19191132 */}
        {window.location.pathname.includes("/blogs/news") === true ? (
          <>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
            <span>&nbsp;</span>
            <span>P</span>
            <span>O</span>
            <span>S</span>
            <span>T</span>
            <span>S</span>
          </>
        ) : (
          <>
            <span>C</span>
            <span>U</span>
            <span>L</span>
            <span>T</span>
            <span>U</span>
            <span>R</span>
            <span>E</span>
          </>
        )}
      </span>
      <Link
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        to="/blogs/news"
        className="btn-hover culture__viewAll culture__viewAll--desktop"
      >
        <span ref={viewAllStatic} className="static">
          View All
        </span>
        <span ref={viewAllHover} className="hover">
          VIEW ALL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIEW
          ALL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </Link>
    </div>
  );
};

export default CultureHeader;
