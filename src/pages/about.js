import React, { useEffect, useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";

import { ReactComponent as ScrollDown } from "../assets/scroll-down.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const smoothScrollWrapper = useRef();

  useEffect(() => {
    gsap.to(".about__scrollDown .rotate-svg", {
      rotation: 360 * 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=5000",
        scrub: 2,
      },
    });
    let mm = gsap.matchMedia();
    mm.add("(min-width:1025px)", () => {
      gsap.from(".about__header .line span", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.03,
      });
      gsap.from(".about__scrollDown", {
        opacity: 0,
        y: "110%",
        duration: 0.6,
        delay: 0.8,
      });
      gsap.from(".about__banner", {
        opacity: 0,
        y: "20%",
        duration: 0.8,
        delay: 0.7,
      });
      gsap.from(".about__info .line span", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.03,
        scrollTrigger: {
          trigger: ".about__content",
          start: "20% top",
          end: "21% top",
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="about">
        <div className="about__header">
          <div className="about__title uppercase">
            <span className="line">
              <span>E</span>
              <span>s</span>
              <span>t</span>
              <span>a</span>
              <span>b</span>
              <span>l</span>
              <span>i</span>
              <span>s</span>
              <span>h</span>
              <span>e</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>i</span>
              <span>n</span>
            </span>
            <span className="line">
              <span>1</span>
              <span>9</span>
              <span>3</span>
              <span>5</span>
            </span>
          </div>
          <div className="about__scrollDown">
            <ScrollDown />
            <Arrow />
          </div>
        </div>
        <div className="about__banner">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/jack-lemkus-1890-x-1200-15-2-x_2x_d701db0f-23e7-4fc6-b449-56ec47d0fc57.jpg?v=1625476629"
            alt="banner"
          />
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
            <img
              src="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/jack-lemkus-1890-x-1200-06_2x_f6c520e0-b1a0-42b7-883b-c5bf243e3c06.jpg?v=1625476673"
              alt="Content"
            />
          </div>
        </div>
        <div className="about__info">
          <div className="about__title uppercase">
            <span className="line">
              <span>N</span>
              <span>i</span>
              <span>k</span>
              <span>e</span>
              <span>&nbsp;</span>
              <span>a</span>
              <span>r</span>
              <span>r</span>
              <span>i</span>
              <span>v</span>
              <span>e</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>i</span>
              <span>n</span>
            </span>
            <span className="line">
              <span>T</span>
              <span>h</span>
              <span>e</span>
              <span>&nbsp;</span>
              <span>l</span>
              <span>a</span>
              <span>t</span>
              <span>e</span>
              <span>&nbsp;</span>
              <span>7</span>
              <span>0</span>
              <span>'</span>
              <span>s</span>
              <span>/</span>
            </span>
            <span className="line">
              <span>E</span>
              <span>a</span>
              <span>r</span>
              <span>l</span>
              <span>y</span>
              <span>&nbsp;</span>
              <span>8</span>
              <span>0</span>
              <span>'</span>
              <span>s</span>
            </span>
          </div>
          <p className="about__info--text">
            Air Jordan following in 1988, making Jack Lemkus one of the first
            stores in SA to stock both brands
          </p>
        </div>
        <div className="about__banner">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/jack-lemkus-1890-x-1200-10-2-x_2x_2883719e-4a95-451c-8aec-08d45e3e9d0d.jpg?v=1625476750"
            alt=""
          />
          <p className="about__banner--text uppercase">
            We are currently a single concept store located at the entrance of
            the city of Cape Town CBD occupying 330 square metres stocked with
            top level sneakers and apparel from some of the biggest brands in
            the world.
          </p>
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default About;
