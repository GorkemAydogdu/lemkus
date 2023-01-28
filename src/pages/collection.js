import React, { useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";

import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as Arrow } from "../assets/chevron-right.svg";

const Collection = () => {
  const smoothScrollWrapper = useRef();
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
            <Button className="collection__hide">Hide Filter</Button>
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
        <div className="collection__content">
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
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Collection;
