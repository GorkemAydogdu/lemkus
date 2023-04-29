import React, { useRef } from "react";

import NewsItem from "./newsItem";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Footer from "../../components/Footer/Footer";

const News = ({ news }) => {
  const smoothScrollWrapper = useRef();

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
