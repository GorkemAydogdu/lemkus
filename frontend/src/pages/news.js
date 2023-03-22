import React, { useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const News = (props) => {
  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="culture dark">
        <ul className="culture__list">
          {props.data.map((item) => (
            <li key={item.id} className="culture__item culture__newsItem">
              <div className="culture__image">
                <Link
                  to={`/blogs/news/${item.name
                    .toLowerCase()
                    .replaceAll(/[^a-zA-Z0-9]/g, "-")
                    .replace(/-{2,}/g, "-")
                    .replace(/-$/, "")}`}
                  className="culture__link"
                >
                  <img src={item.image} alt={item.name} />
                </Link>
                <Button type="button" className="culture__date">
                  <span>{item.category} -</span>
                  <span>&nbsp;{item.date}</span>
                </Button>
              </div>
              <Link
                to={`/blogs/news/${item.name
                  .toLowerCase()
                  .replaceAll(/[^a-zA-Z0-9]/g, "-")
                  .replace(/-{2,}/g, "-")
                  .replace(/-$/, "")}`}
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
