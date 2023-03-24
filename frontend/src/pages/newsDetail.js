import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Culture from "../components/Culture/Culture";

const NewsDetail = (props) => {
  const [clickedNews, setClickedNews] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:5000/news/${id}`);
      const data = await res.json();
      setClickedNews(data);
    }
    fetchData();
  }, [id]);

  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      {clickedNews && (
        <div key={clickedNews.id} className="newsDetail">
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
          <div className="newsDetail__content">
            <div className="newsDetail__imageFull">
              <img src={clickedNews.imageFull} alt={clickedNews.name} />
            </div>
            <p className="newsDetail__heading">{clickedNews.headingText1}</p>
            {clickedNews.descriptionText1.map((text) => (
              <p key={text.id} className="newsDetail__description">
                {text.text}
              </p>
            ))}

            <div className="newsDetail__sidetoside">
              {clickedNews.sideToside.map((clickedNews) => (
                <div
                  key={clickedNews.id}
                  className="newsDetail__sidetoside--side"
                >
                  <img src={clickedNews.image} alt="" />
                </div>
              ))}
            </div>
            <p className="newsDetail__heading">{clickedNews.headingText2}</p>
            {clickedNews.descriptionText2.map((text) => (
              <p key={text.id} className="newsDetail__description">
                {text.text}
              </p>
            ))}
            <p className="newsDetail__heading">{clickedNews.headingText3}</p>
            <p className="newsDetail__description">
              {clickedNews.descriptionText3}
            </p>
            <div className="newsDetail__imageText">
              <div className="newsDetail__imageText--image">
                <img src={clickedNews.imageTextImage} alt="" />
              </div>
              <div className="newsDetail__imageText--text">
                <p className="newsDetail__heading">
                  {clickedNews.imageTextHeding}
                </p>
                <p className="newsDetail__description">
                  {clickedNews.imageTextDesc}
                </p>
              </div>
            </div>
            <div className="newsDetail__imageText newsDetail__imageText--reverse">
              <div className="newsDetail__imageText--image">
                <img src={clickedNews.imageTextReverseImage} alt="" />
              </div>
              <div className="newsDetail__imageText--text">
                <p className="newsDetail__heading">
                  {clickedNews.imageTextReverseHeading}
                </p>
                <p className="newsDetail__description">
                  {clickedNews.imageTextReverseDesc}
                </p>
                <p className="newsDetail__secondary">
                  {clickedNews.imageTextReverseSecondary}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Culture />
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default NewsDetail;
