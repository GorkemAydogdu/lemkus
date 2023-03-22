import React from "react";
import Photo from "../../assets/Photo.webp";

const Banner = () => {
  return (
    <div className="banner">
      <a href="/" className="banner__link">
        <img src={Photo} className="banner__image" alt="Nike Air Trainer" />
      </a>
    </div>
  );
};

export default Banner;
