import React, { useState, useRef, useEffect } from "react";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import Button from "../../components/UI/Button";

import gsap from "gsap";
import { Flip } from "gsap/all";
gsap.registerPlugin(Flip);

const CollectionHeader = ({ categoryName, dataLenght }) => {
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
      <div className="collection__searchBox">
        <div className="collection__input">
          <input type="text" placeholder="Search Products" />
        </div>
        <Button className="collection__searchButton">
          <SearchIcon />
        </Button>
      </div>
      <div className="collection__action">
        <Button onClick={closeFilterButtonHandler} className="collection__hide">
          Hide Filter
        </Button>
        <Button
          onClick={() => {
            document.body.style.overflow = "hidden";
            document
              .querySelector("collection__menuMobile")
              .classList.toggle("collection__menuMobile--toggle");
          }}
          className="collection__filterBy"
        >
          Filter By
        </Button>

        <div className="collection__filterList">
          <span className="collection__totalProducts">
            <span>{dataLenght}</span> Products
          </span>
          <div className="collection__showSize">
            <label htmlFor="setLimit">Show</label>
            <select name="setLimit" id="setLimit">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
