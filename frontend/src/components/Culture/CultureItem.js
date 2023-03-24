import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";

const CultureItem = ({ image, id, name, category, date }) => {
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
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="culture__link"
          to={`/blogs/news/${id}`}
        >
          <img ref={imageRef} src={image} alt={name} />
        </Link>
        <Button type="button" className="culture__date">
          <span>{category} -</span>
          <span>&nbsp;{date}</span>
        </Button>
      </div>
      <Link
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        to={`/blogs/news/${id}`}
        className="culture__item--title"
      >
        {name}
      </Link>
    </div>
  );
};

export default CultureItem;
