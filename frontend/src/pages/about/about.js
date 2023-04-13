import React, { useEffect, useRef } from "react";

import AboutHeader from "./aboutHeader";
import AboutContent from "./aboutContent";
import AboutInfo from "./aboutInfo";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Footer from "../../components/Footer/Footer";

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
        <AboutHeader />
        <div className="about__banner">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/jack-lemkus-1890-x-1200-15-2-x_2x_d701db0f-23e7-4fc6-b449-56ec47d0fc57.jpg?v=1625476629"
            alt="banner"
          />
        </div>
        <AboutContent />
        <AboutInfo />
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
