import React from "react";

const NewsDetailHeader = ({ clickedNews }) => {
  return (
    <div className="newsDetail__header">
      <h1 className="newsDetail__title">{clickedNews.name}</h1>
      <ul className="newsDetail__infos">
        <li className="newsDetail__info">
          <span>Category</span>
          <span>{clickedNews.category}</span>
        </li>
        <li className="newsDetail__info">
          <span>Date</span>
          <span>{clickedNews.date}</span>
        </li>
        <li className="newsDetail__info">
          <span>Author</span>
          <span>{clickedNews.author}</span>
        </li>
        <li className="newsDetail__info">
          <span>Read Time</span>
          <span>{clickedNews.readTime}</span>
        </li>
      </ul>
    </div>
  );
};

export default NewsDetailHeader;
