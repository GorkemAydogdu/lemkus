import React, { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

import Button from "../UI/Button";
import ArrowLeft from "../../assets/keyboard_arrow_left.svg";
import UIContext from "../../context/ui-context";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";
import { Link } from "react-router-dom";

const WishlistSelectedDetail = (props) => {
  const uiCtx = useContext(UIContext);

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

        item.button.innerHTML = `<img src='' alt='Product ${
          item.page + 1
        } of 7'/>`;
      });
    });

    splide.mount();
  }, []);
  const dispatch = useDispatch();

  function addDataToCartHandler(_id, name, price, images, clickedSize) {
    uiCtx.toggleCart();
    uiCtx.toggleWishlist();
    dispatch(
      cartActions.addItemToCart({ _id, name, price, images, clickedSize })
    );
  }

  useEffect(() => {
    let wishlistButton = document.querySelectorAll(
      ".wishlist__thumbnailButton"
    );
    props.clickedData.images.forEach((image, idx) => {
      wishlistButton[
        idx
      ].innerHTML = `<img src=${image.url} alt=${props.clickedData.name}/>`;
    });
  }, [props.clickedData]);

  return (
    <div className="wishlist__selectedDetail">
      <Button
        onClick={() => {
          uiCtx.toggleWishlistDetail();
        }}
        className="wishlist__backList"
      >
        <span>
          <ArrowLeft />
        </span>
        <span>Back To List</span>
      </Button>
      <div className="wishlist__selectedProduct">
        <div className="splide wishlist__images">
          <div className="splide__track">
            <ul className="splide__list">
              {props.clickedData.images.map((item) => (
                <li key={item.id} className="splide__slide">
                  <img src={item.url} alt={props.clickedData.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wishlist__selectedProductDetail">
          <span className="wishlist__selectedProductDetail--title">
            {props.clickedData.name}
          </span>
          <span className="wishlist__selectedProductDetail--size">
            Size : {props.clickedData.clickedSize}
          </span>
          <div className="wishlist__action">
            <Button
              onClick={() =>
                addDataToCartHandler(
                  props.clickedData._id,
                  props.clickedData.name,
                  props.clickedData.price,
                  props.clickedData.images,
                  props.clickedData.clickedSize
                )
              }
              className="wishlist__addToCart"
            >
              Add To Cart
            </Button>
            <Link
              onClick={() => {
                uiCtx.toggleWishlistDetail();
                uiCtx.toggleWishlist();
              }}
              to={`/products/${props.clickedData.name
                .toLowerCase()
                .replaceAll(/[^a-zA-Z0-9]/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/-$/, "")}?id=${props.clickedData.productId}`}
              className="wishlist__action--more"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistSelectedDetail;
