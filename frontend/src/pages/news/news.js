import React, { useEffect, useRef, useState } from "react";

import NewsItem from "./newsItem";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Footer from "../../components/Footer/Footer";

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
            <NewsItem key={item._id} item={item} />
          ))}
        </ul>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default News;
