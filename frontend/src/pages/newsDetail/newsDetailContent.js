import React from "react";

const NewsDetailContent = ({ clickedNews }) => {
  return (
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
          <div key={clickedNews.id} className="newsDetail__sidetoside--side">
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
      <p className="newsDetail__description">{clickedNews.descriptionText3}</p>
      <div className="newsDetail__imageText">
        <div className="newsDetail__imageText--image">
          <img src={clickedNews.imageTextImage} alt="" />
        </div>
        <div className="newsDetail__imageText--text">
          <p className="newsDetail__heading">{clickedNews.imageTextHeding}</p>
          <p className="newsDetail__description">{clickedNews.imageTextDesc}</p>
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
  );
};

export default NewsDetailContent;
