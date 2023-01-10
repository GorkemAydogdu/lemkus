import React, { useRef } from "react";

//components
import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Button from "../components/UI/Button";

import { ReactComponent as X } from "../assets/x.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const Search = () => {
  const smoothScrollWrapper = useRef();

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="search">
        <div className="search__box">
          <span>Looking For Something?</span>
          <div className="search__input">
            <input
              type="text"
              placeholder="Search by product, category or keyword"
            />

            <Button className="search__button">
              <SearchIcon />
            </Button>
            <Button className="search__button search__button--delete">
              <X />
            </Button>
          </div>
        </div>
        <ul className="search__list search__content">
          {/*Veritabanından markalar ve ürünler girilen kelimeye göre listelenecek */}
          <li className="search__item">
            <span className="search__title">Collections</span>
            <ul className="search__list">
              <li className="search__item">
                <a className="search__link" href="/">
                  Air Jordan
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  Air Jordan
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  Air Jordan
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  Air Jordan
                </a>
              </li>
            </ul>
          </li>
          <li className="search__item">
            <span className="search__title">Products</span>
            <ul className="search__list">
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="/">
                  <div className="search__image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1_180x.png?v=1667811347"
                      alt="Jordan Air 200E"
                    />
                  </div>
                  <div className="search__item--detail">
                    <span className="search__item--title">Jordan Air 200E</span>
                    <span className="search__item--brand">Air Jordan</span>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Search;
