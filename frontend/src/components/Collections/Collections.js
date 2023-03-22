import React, { useRef, useEffect } from "react";

//components
import CollectionsItem from "./CollectionsItem";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collections = (props) => {
  const collectionsRef = useRef();

  const mouseEnterHandler = () => {
    props.refEl(collectionsRef.current);
  };

  useEffect(() => {
    let splide = new Splide(".collections", {
      drag: "free",
      perPage: 3,
      speed: 800,
      arrows: false,
      gap: 30,
      pagination: false,
      breakpoints: {
        1366: {
          gap: 27,
        },
        1024: {
          gap: 24,
          perPage: 2,
        },
        700: {
          gap: 21,
        },
        500: {
          gap: 18,
          perPage: 1,
        },
        350: {
          gap: 15,
        },
      },
    });

    splide.mount();

    //https://greensock.com/docs/v3/GSAP/gsap.matchMedia()
    let mm = gsap.matchMedia();

    mm.add("(min-width:1025px)", () => {
      gsap.to(".collections__item", {
        clipPath: "inset(0% 0% 0%)",
        stagger: 0.15,
        duration: 1.75,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".banner",
          start: "15% top",
          end: "20% top",
        },
      });
    });
  }, []);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      ref={collectionsRef}
      className="splide collections"
    >
      <div className="splide__track collections__container">
        <ul className="splide__list">
          {props.data.map((item) => (
            <CollectionsItem
              key={item.id}
              image={item.image}
              name={item.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collections;
