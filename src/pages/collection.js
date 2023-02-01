import React, { useState, useMemo, useEffect, useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";

import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as Arrow } from "../assets/chevron-right.svg";

import gsap from "gsap";
import { Flip } from "gsap/all";
gsap.registerPlugin(Flip);

const Collection = () => {
  const smoothScrollWrapper = useRef();
  const tl = useRef();
  const [filterClicked, setFilterClicked] = useState(false);
  const collectionContentRef = useRef();

  function closeFilterButtonHandler() {
    const state = Flip.getState(
      ".collection__productsList, .collection__productsItem"
    );

    setFilterClicked((prevState) => !prevState);

    collectionContentRef.current.classList.toggle("is-filter");

    Flip.from(state, {
      absolute: true,
      duration: 0.5,
      ease: "expo.inOut",
    });
  }

  //https://greensock.com/forums/topic/31208-gsap-reverse-not-working-in-react/?do=findComment&comment=155973
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
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
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="collection">
        <div className="collection__header">
          <h1 className="collection__title">Sneakers</h1>
          <div className="collection__searchBox">
            <div className="collection__input">
              <input type="text" placeholder="Search Products" />
            </div>
            <Button className="collection__searchButton">
              <SearchIcon />
            </Button>
          </div>
          <div className="collection__action">
            <Button
              onClick={closeFilterButtonHandler}
              className="collection__hide"
            >
              Hide Filter
            </Button>
            <div className="collection__filterList">
              <span className="collection__totalProducts">
                <span>311</span> Products
              </span>
              <div className="collection__showSize">
                <label htmlFor="setLimit">Show</label>
                <select name="setLimit" id="setLimit">
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                </select>
              </div>
              <div className="collection__sortBy">
                <label htmlFor="sortBy">Date,new to old</label>
                <div className="collection__sortOption">
                  <span>Best Selling</span>
                  <span>Alphabetically, A-Z</span>
                  <span>Alphabetically, Z-A</span>
                  <span>Price,low to high</span>
                  <span>Price,high to low</span>
                  <span>Date,new to old</span>
                  <span>Date,old to new</span>
                  <span>% Sale off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={collectionContentRef} className="collection__content">
          <div className="collection__filterProduct">
            <div className="collection__filterProduct--item collection__filterProduct--item--active">
              <span className="collection__filterProduct--title">
                Brand
                <Arrow />
              </span>

              <ul className="collection__list">
                <li className="collection__item collection__item--active">
                  <span className="collection__item--checkbox"></span>
                  <span className="collection__item--brand">Adidas</span>
                  <span className="collection__item--count">(57)</span>
                </li>
                <li className="collection__item">
                  <span className="collection__item--checkbox"></span>
                  <span className="collection__item--brand">Adidas</span>
                  <span className="collection__item--count">(57)</span>
                </li>
              </ul>
            </div>
            <div className="collection__filterProduct--item">
              <span className="collection__filterProduct--title">
                Sneaker Style
                <Arrow />
              </span>

              <ul className="collection__list">
                <li className="collection__item">
                  <span className="collection__item--checkbox"></span>
                  <span className="collection__item--brand">Adidas</span>
                  <span className="collection__item--count">(57)</span>
                </li>
              </ul>
            </div>
          </div>
          <ul className="collection__productsList products__list">
            <li className="collection__productsItem products__item">
              <div className="products__container">
                <a href="/" className="products__image">
                  <div className="products__logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/air-jordan_200x.png"
                      alt="Air Jordan"
                    />
                  </div>
                  <img
                    className={`products__image--1`}
                    src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CD9054-104-1.png?v=1674123134"
                    alt="Air Jordan Legacy 312 Low (Gs)"
                  />
                </a>

                <div className="products__infos">
                  <div className="products__container--size">
                    <a href="/">4</a>
                  </div>
                  <a href="/" className="products__container--title">
                    Air Jordan Legacy 312 Low (Gs)
                  </a>
                  <span className="products__container--price">R 1,899.00</span>
                </div>
              </div>
            </li>
            <li className="collection__productsItem products__item">
              <div className="products__container">
                <a href="/" className="products__image">
                  <div className="products__logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/air-jordan_200x.png"
                      alt="Air Jordan"
                    />
                  </div>
                  <img
                    className={`products__image--1`}
                    src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CD9054-104-1.png?v=1674123134"
                    alt="Air Jordan Legacy 312 Low (Gs)"
                  />
                </a>

                <div className="products__infos">
                  <div className="products__container--size">
                    <a href="/">4</a>
                  </div>
                  <a href="/" className="products__container--title">
                    Air Jordan Legacy 312 Low (Gs)
                  </a>
                  <span className="products__container--price">R 1,899.00</span>
                </div>
              </div>
            </li>
            <li className="collection__productsItem products__item">
              <div className="products__container">
                <a href="/" className="products__image">
                  <div className="products__logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/air-jordan_200x.png"
                      alt="Air Jordan"
                    />
                  </div>
                  <img
                    className={`products__image--1`}
                    src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CD9054-104-1.png?v=1674123134"
                    alt="Air Jordan Legacy 312 Low (Gs)"
                  />
                </a>

                <div className="products__infos">
                  <div className="products__container--size">
                    <a href="/">4</a>
                  </div>
                  <a href="/" className="products__container--title">
                    Air Jordan Legacy 312 Low (Gs)
                  </a>
                  <span className="products__container--price">R 1,899.00</span>
                </div>
              </div>
            </li>
            <li className="collection__productsItem products__item">
              <div className="products__container">
                <a href="/" className="products__image">
                  <div className="products__logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/air-jordan_200x.png"
                      alt="Air Jordan"
                    />
                  </div>
                  <img
                    className={`products__image--1`}
                    src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CD9054-104-1.png?v=1674123134"
                    alt="Air Jordan Legacy 312 Low (Gs)"
                  />
                </a>

                <div className="products__infos">
                  <div className="products__container--size">
                    <a href="/">4</a>
                  </div>
                  <a href="/" className="products__container--title">
                    Air Jordan Legacy 312 Low (Gs)
                  </a>
                  <span className="products__container--price">R 1,899.00</span>
                </div>
              </div>
            </li>
            <li className="collection__productsItem products__item">
              <div className="products__container">
                <a href="/" className="products__image">
                  <div className="products__logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/air-jordan_200x.png"
                      alt="Air Jordan"
                    />
                  </div>
                  <img
                    className={`products__image--1`}
                    src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CD9054-104-1.png?v=1674123134"
                    alt="Air Jordan Legacy 312 Low (Gs)"
                  />
                </a>

                <div className="products__infos">
                  <div className="products__container--size">
                    <a href="/">4</a>
                  </div>
                  <a href="/" className="products__container--title">
                    Air Jordan Legacy 312 Low (Gs)
                  </a>
                  <span className="products__container--price">R 1,899.00</span>
                </div>
              </div>
            </li>
            <li className="collection__productsItem products__item">
              <div className="products__container">
                <a href="/" className="products__image">
                  <div className="products__logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/air-jordan_200x.png"
                      alt="Air Jordan"
                    />
                  </div>
                  <img
                    className={`products__image--1`}
                    src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CD9054-104-1.png?v=1674123134"
                    alt="Air Jordan Legacy 312 Low (Gs)"
                  />
                </a>

                <div className="products__infos">
                  <div className="products__container--size">
                    <a href="/">4</a>
                  </div>
                  <a href="/" className="products__container--title">
                    Air Jordan Legacy 312 Low (Gs)
                  </a>
                  <span className="products__container--price">R 1,899.00</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Collection;
