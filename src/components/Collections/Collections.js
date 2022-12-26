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

const DUMMY_DATA = [
  {
    id: 1,
    name: "Sol Sol",
    image:
      "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/3_Sol_Sol_Collection_Images_556x508_53186f03-6fac-4d79-b37b-7462de1d15b0.png?v=1667892546",
  },
  {
    id: 2,
    name: "Ceremony",
    image:
      "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/CEREMONY_Collection_Images_556x508_6f09923c-5df6-4007-8ffc-71939a5359eb.png?v=1666961243",
  },
  {
    id: 3,
    name: "Human By Nature",
    image:
      "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/2_HBN_Collection_Images_556x508_fe641c9c-aff0-4430-afe8-3323da184223.png?v=1667892762",
  },
  {
    id: 4,
    name: "The New Originals",
    image:
      "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/TNO_Collection_Images_556x508_8decb7f6-62ec-40b8-a255-406a0f1ba668.jpg?v=1653904660",
  },
  {
    id: 5,
    name: "Maylee",
    image:
      "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/1_Maylee_Collection_Images_556x508_dbad3790-904e-491f-948d-e797425aba99.png?v=1654850369",
  },
];

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
          {DUMMY_DATA.map((item) => (
            <CollectionsItem
              key={item.id}
              id={item.id}
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
