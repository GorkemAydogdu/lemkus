import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import CultureItem from "./CultureItem";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

const CultureGroup = () => {
  const [news, setNews] = useState([]);
  const [completeFetch, setCompleteFetch] = useState(false);

  async function getNews() {
    try {
      setCompleteFetch(true);
      const res = await fetch("http://localhost:5000/news");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setCompleteFetch(false);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (completeFetch !== true) {
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
  }, [completeFetch]);

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
