import React, { useState, useRef, useEffect } from "react";

import Button from "../../components/UI/Button";

import gsap from "gsap";
import { Flip } from "gsap/all";
gsap.registerPlugin(Flip);

const CollectionHeader = ({ categoryName, dataLength }) => {
  const [filterClicked, setFilterClicked] = useState(false);
  const tl = useRef();

  function closeFilterButtonHandler() {
    const state = Flip.getState(
      ".collection__productsList, .collection__productsItem"
    );

    setFilterClicked((prevState) => !prevState);

    document
      .querySelector(".collection__content")
      .classList.toggle("is-filter");

    Flip.from(state, {
      absolute: true,
      duration: 0.5,
      ease: "expo.inOut",
    });
  }
  //https://greensock.com/forums/topic/31208-gsap-reverse-not-working-in-react/?do=findComment&comment=155973
  useEffect(() => {
    tl.current = gsap.timeline({ paused: false });
    tl.current.to(".collection__filterProduct", {
      duration: 0.5,
      ease: "expo.inOut",
      x: "-110%",
    });
  }, []);

  useEffect(() => {
    filterClicked ? tl.current.play() : tl.current.reverse();
  }, [filterClicked]);
  return (
    <div className="collection__header">
      <h1 className="collection__title">{categoryName.replace("-", " ")}</h1>
      <div className="collection__action">
        <Button onClick={closeFilterButtonHandler} className="collection__hide">
          Hide Filter
        </Button>
        <Button
          onClick={() => {
            document.body.style.overflow = "hidden";
            document
              .querySelector(".collection__filterMobile")
              .classList.toggle("collection__filterMobile--toggle");
          }}
          className="collection__filterBy"
        >
          Filter By
        </Button>

        <div className="collection__filterList">
          <span className="collection__totalProducts">
            <span>{dataLength}</span> Products
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
