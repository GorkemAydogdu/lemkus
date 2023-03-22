import React, { useEffect, useRef } from "react";

import { useParams } from "react-router-dom";

import gsap from "gsap";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Culture from "../components/Culture/Culture";

const NewsDetail = (props) => {
  const { newsName } = useParams();
  useEffect(() => {
    gsap.from(".newsDetail__title ", {
      y: "20%",
      opacity: 0,
      duration: 0.9,
    });
  }, []);

  let filter = props.data.filter(
    (filter) =>
      filter.name
        .toLowerCase()
        .replaceAll(/[^a-zA-Z0-9]/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/-$/, "") === newsName
  );
  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      {filter.map((item) => (
        <div key={item.id} className="newsDetail">
          <div className="newsDetail__header">
            <h1 className="newsDetail__title">{item.name}</h1>
            <ul className="newsDetail__infos">
              <li className="newsDetail__info">
                <span>Category</span>
                <span>{item.category}</span>
              </li>
              <li className="newsDetail__info">
                <span>Date</span>
                <span>{item.date}</span>
              </li>
              <li className="newsDetail__info">
                <span>Author</span>
                <span>{item.author}</span>
              </li>
              <li className="newsDetail__info">
                <span>Read Time</span>
                <span>{item.readTime}</span>
              </li>
            </ul>
          </div>
          <div className="newsDetail__content">
            <div className="newsDetail__imageFull">
              <img src={item.imageFull} alt={item.name} />
            </div>
            <p className="newsDetail__heading">{item.headingText1}</p>
            {item.descriptionText1.map((text) => (
              <p key={text.id} className="newsDetail__description">
                {text.text}
              </p>
            ))}

            <div className="newsDetail__sidetoside">
              {item.sideToside.map((item) => (
                <div key={item.id} className="newsDetail__sidetoside--side">
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
            <p className="newsDetail__heading">{item.headingText2}</p>
            {item.descriptionText2.map((text) => (
              <p key={text.id} className="newsDetail__description">
                {text.text}
              </p>
            ))}
            <p className="newsDetail__heading">{item.headingText3}</p>
            <p className="newsDetail__description">{item.descriptionText3}</p>
            <div className="newsDetail__imageText">
              <div className="newsDetail__imageText--image">
                <img src={item.imageTextImage} alt="" />
              </div>
              <div className="newsDetail__imageText--text">
                <p className="newsDetail__heading">{item.imageTextHeding}</p>
                <p className="newsDetail__description">{item.imageTextDesc}</p>
              </div>
            </div>
            <div className="newsDetail__imageText newsDetail__imageText--reverse">
              <div className="newsDetail__imageText--image">
                <img src={item.imageTextReverseImage} alt="" />
              </div>
              <div className="newsDetail__imageText--text">
                <p className="newsDetail__heading">
                  {item.imageTextReverseHeading}
                </p>
                <p className="newsDetail__description">
                  {item.imageTextReverseDesc}
                </p>
                <p className="newsDetail__secondary">
                  {item.imageTextReverseSecondary}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Culture />
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default NewsDetail;
