import React, { useRef } from "react";

const CultureItem = (props) => {
  const imageRef = useRef();
  const mouseEnterHandler = () => {
    imageRef.current.style.transform = "scale(1.03)";
  };

  const mouseLeaveHandler = () => {
    imageRef.current.style.transform = "scale(1)";
  };
  return (
    <div className="splide__slide culture__item">
      <div className="culture__image">
        <a
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="culture__link"
          href="/"
        >
          <img ref={imageRef} src={props.image} alt={props.name} />
        </a>
      </div>
      <a
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        href="/"
        className="culture__item--title"
      >
        {props.name}
      </a>
    </div>
  );
};

export default CultureItem;
