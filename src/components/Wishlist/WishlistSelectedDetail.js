import React, { useEffect } from "react";

import Button from "../UI/Button";
import { ReactComponent as ArrowLeft } from "../../assets/keyboard_arrow_left.svg";
// import { ReactComponent as ArrowRight } from "../../assets/chevron-right.svg";
import { ReactComponent as ArrowDown } from "../../assets/triangle-down.svg";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

const WishlistSelectedDetail = () => {
  useEffect(() => {
    const splide = new Splide(".wishlist__images", {
      arrows: false,
    });

    splide.on("pagination:mounted", function (data) {
      data.list.classList.remove(
        "splide__pagination",
        "splide__pagination--ltr"
      );

      data.list.classList.add("wishlist__thumbnail");

      data.items.forEach(function (item) {
        item.li.classList.add("wishlist__thumbnailItem");

        item.button.classList.remove("splide__pagination__page");

        item.button.classList.add("wishlist__thumbnailButton");

        item.button.innerHTML = `<img src='https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-${
          item.page + 1
        }.png?v=1665052479' alt='Product ${item.page + 1} of 7'/>`;
      });
    });

    splide.mount();
  }, []);
  return (
    <div className="wishlist__selectedDetail">
      <Button className="wishlist__backList">
        <span>
          <ArrowLeft />
        </span>
        <span>Back To List</span>
      </Button>
      <div className="wishlist__selectedProduct">
        <div className="splide wishlist__images">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-1.png?v=1665052479"
                  alt="Jordan Delta 3 Low"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-2.png?v=1665052479"
                  alt="Jordan Delta 3 Low"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-3.png?v=1665052479"
                  alt="Jordan Delta 3 Low"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-4.png?v=1665052479"
                  alt="Jordan Delta 3 Low"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-5.png?v=1665052479"
                  alt="Jordan Delta 3 Low"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-6.png?v=1665052479"
                  alt="Jordan Delta 3 Low"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-7.png?v=1665052479"
                  alt="Jordan Delta 3 Low"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="wishlist__selectedProductDetail">
          <span className="wishlist__selectedProductDetail--title">
            Jordan Delta 3 Low
          </span>
          <div className="wishlist__selectedProductDetail--size">
            <ArrowDown />
            <label htmlFor="size">Size</label>
            <select name="size" id="size">
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="wishlist__action">
            <Button className="wishlist__addToCart">Add To Cart</Button>
            <a href="/" className="wishlist__action--more">
              More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistSelectedDetail;
