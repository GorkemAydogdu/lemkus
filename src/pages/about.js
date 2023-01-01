import React, { useEffect, useRef } from "react";

import Footer from "../components/Footer/Footer";

import { ReactComponent as ScrollDown } from "../assets/scroll-down.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

import Banner from "../assets/aboutBanner.webp";
import ContentImage from "../assets/aboutContentImage.webp";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const smoothScrollWrapper = useRef();

  useEffect(() => {
    smoothScroll(smoothScrollWrapper.current);

    function smoothScroll(content) {
      let smoothness = 2;

      gsap.set(content.parentNode, {
        position: "fixed",
      });

      let height;

      function refreshHeight() {
        height = content.clientHeight;
        document.body.style.height = height + "px";
        return height - document.documentElement.clientHeight;
      }

      return ScrollTrigger.create({
        animation: gsap.fromTo(
          content,
          { y: 0 },
          {
            y: () =>
              document.documentElement.clientHeight -
              height -
              content.getBoundingClientRect().top,
            ease: "none",
          }
        ),
        invalidateOnRefresh: true,
        start: 0,
        end: refreshHeight,
        scrub: smoothness,
      });
    }
  }, []);

  return (
    <div ref={smoothScrollWrapper} className="pageSmooth">
      <div className="about">
        <div className="about__header">
          <div className="about__title uppercase">
            <span>Established In</span>
            <span>1935</span>
          </div>
          <div className="about__scrollDown">
            <ScrollDown />
            <Arrow />
          </div>
        </div>
        <div className="about__banner">
          <img src={Banner} alt="banner" />
        </div>
        <div className="about__content">
          <div className="about__text">
            <span className="about__text--title uppercase">
              one of the leading retailers in premium sports footwear and
              apparel in South Africa, which caters to sneaker enthusiasts.
            </span>
            <span className="about__text--subtitle">
              JACK LEMKUS started out selling sporting equipment, hobbies, toys
              etc. - Brands that were available for the first time in S.A and at
              JACK LEMKUS between 1935 to late 60’s were brands like Bata Shoes,
              Converse, Wrangler and Dunlop.
            </span>
            <span className="about__text--subtitle">
              Brands such as Adidas and Asics came to JACK LEMKUS in the 70’s.
            </span>
          </div>
          <div className="about__image">
            <img src={ContentImage} alt="Content" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
