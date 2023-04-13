import React from "react";

const AboutContent = () => {
  return (
    <div className="about__content">
      <div className="about__text">
        <span className="about__text--title uppercase">
          one of the leading retailers in premium sports footwear and apparel in
          South Africa, which caters to sneaker enthusiasts.
        </span>
        <span className="about__text--subtitle">
          JACK LEMKUS started out selling sporting equipment, hobbies, toys etc.
          - Brands that were available for the first time in S.A and at JACK
          LEMKUS between 1935 to late 60’s were brands like Bata Shoes,
          Converse, Wrangler and Dunlop.
        </span>
        <span className="about__text--subtitle">
          Brands such as Adidas and Asics came to JACK LEMKUS in the 70’s.
        </span>
      </div>
      <div className="about__image">
        <img
          src="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/jack-lemkus-1890-x-1200-06_2x_f6c520e0-b1a0-42b7-883b-c5bf243e3c06.jpg?v=1625476673"
          alt="Content"
        />
      </div>
    </div>
  );
};

export default AboutContent;
