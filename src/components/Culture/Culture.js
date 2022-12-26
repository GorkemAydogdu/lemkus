import React, { useEffect, useRef } from "react";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

//components
import CultureItem from "./CultureItem";

gsap.registerPlugin(ScrollTrigger);

const DUMMY_DATA = {
  culture: [
    {
      id: 1,
      name: "Holiday Trading Hours",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/articles/Lemkus_Holiday_2022_517x654_ffc58152-753a-45b6-9f25-af22b2182cca.png?v=1670590833",
    },
    {
      id: 2,
      name: "Air Max 97: When Silver was the color of Champions…",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/articles/Nike_Air_Max_97_SK_517x654_1f9138ae-eaba-45d9-ac2e-5acccd597aad.png?v=1669991364",
    },
    {
      id: 3,
      name: "Scumboy x Air Max 97",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/articles/Lemkus_Scumboy_Nike_Air_Max_97_517x654_616c9ee7-938f-4850-95ff-cc47b9314123.png?v=1669967862",
    },
    {
      id: 4,
      name: 'AIR JORDAN 1 "CHICAGO"',
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/articles/AJ1_Chicago_517x654_b3974e66-d81c-4558-89be-d8b2e661fa8d.jpg?v=1668163880",
    },
  ],
};

const Culture = () => {
  const viewAllStatic = useRef();
  const viewAllHover = useRef();

  useEffect(() => {
    let splide = new Splide(".culture__group", {
      drag: false,
      perPage: 4,
      gap: 16,
      speed: 800,
      arrows: false,
      pagination: false,
      breakpoints: {
        1024: {
          drag: "free",
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      },
    });

    splide.mount();

    gsap.from(".culture__title", {
      y: "110%",
      opacity: 0,
      duration: 0.5,
      skewY: 10,
      scrollTrigger: {
        trigger: ".culture__header",
        start: "top 75%",
        end: "top 80%",
      },
    });
  }, []);

  const mouseEnterHandler = () => {
    viewAllHover.current.style.display = "inline-block";
    viewAllStatic.current.style.display = "none";
  };

  const mouseLeaveHandler = () => {
    viewAllHover.current.style.display = "none";
    viewAllStatic.current.style.display = "inline-block";
  };

  return (
    <div className="culture">
      <div className="culture__header">
        <span className="culture__title">CULTURE</span>
        <a
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          href="/"
          className="culture__viewAll culture__viewAll--desktop"
        >
          <span ref={viewAllStatic} className="culture__viewAll--static">
            View All
          </span>
          <span ref={viewAllHover} className="culture__viewAll--hover">
            VIEW ALL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIEW
            ALL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </a>
      </div>
      <div className="splide culture__group">
        <div className="splide__track culture__container">
          <div className="splide__list">
            {DUMMY_DATA.culture.map((item) => (
              <CultureItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <a href="/" className="culture__viewAll culture__viewAll--mobile">
          View All
        </a>
      </div>
    </div>
  );
};

export default Culture;
