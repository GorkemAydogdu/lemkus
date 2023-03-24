import React, { useEffect, useRef, useState } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const News = () => {
  const smoothScrollWrapper = useRef();
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const res = await fetch("http://localhost:5000/news");
      if (!res.ok) {
        throw Error("Something went wrong");
      }

      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="culture dark">
        <ul className="culture__list">
          {news.map((item) => (
            <li key={item._id} className="culture__item culture__newsItem">
              <div className="culture__image">
                <Link to={`/blogs/news/${item._id}`} className="culture__link">
                  <img src={item.image} alt={item.name} />
                </Link>
                <Button type="button" className="culture__date">
                  <span>{item.category} -</span>
                  <span>&nbsp;{item.date}</span>
                </Button>
              </div>
              <Link
                to={`/blogs/news/${item._id}`}
                className="culture__item--title culture__newsItem--title"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default News;
