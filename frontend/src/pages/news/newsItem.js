import React from "react";

import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
const NewsItem = ({ item }) => {
  return (
    <li className="culture__item culture__newsItem">
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
  );
};

export default NewsItem;
