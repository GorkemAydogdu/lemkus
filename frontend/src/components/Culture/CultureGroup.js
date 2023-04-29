import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import CultureItem from "./CultureItem";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

const CultureGroup = ({ news }) => {
  useEffect(() => {
    if (news !== []) {
      let splide = new Splide(".culture__group", {
        drag: false,
        perPage: 4,
        gap: 16,
        speed: 800,
        arrows: false,
        pagination: false,
        breakpoints: {
          1024: {
            drag: "free",
            perPage: 2,
          },
          500: {
            perPage: 1,
          },
        },
      });
      splide.mount();
    }
  }, [news]);

  return (
    <div className="splide culture__group">
      <div className="splide__track culture__container">
        <div className="splide__list">
          {news.slice(0, 4).map((item) => (
            <CultureItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              category={item.category}
              date={item.date}
            />
          ))}
        </div>
      </div>
      <Link
        to="/blogs/news"
        className="btn-hover culture__viewAll culture__viewAll--mobile"
      >
        View All
      </Link>
    </div>
  );
};

export default CultureGroup;
