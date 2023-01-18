import React, { useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const News = () => {
  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="culture dark">
        <ul className="culture__list">
          <li className="culture__item culture__newsItem">
            <div className="culture__image">
              <Link to="/blogs/news/detail" className="culture__link">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/articles/Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_517x654_420c9e39-50c6-46f4-8227-ebfd7ed44b49.jpg?v=1672214228"
                  alt="Rolo Rozay"
                />
              </Link>
              <Button type="button" className="culture__date">
                <span>Releases -</span>
                <span>&nbsp;28.12.22</span>
              </Button>
            </div>
            <Link
              to="/blogs/news/detail"
              className="culture__item--title culture__newsItem--title"
            >
              Rolo Rozay X Air Jordan 2: The 35th Anniversary
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default News;
