import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

import UIContext from "../../context/ui-context";
import X from "../../assets/x.svg";
import Button from "../UI/Button";
import WishlistSelectedDetail from "./WishlistSelectedDetail";

const WishlistContent = (props) => {
  const uiCtx = useContext(UIContext);
  const [clickedData, setClickedData] = useState([]);

  async function removeWishlistHandler(itemId) {
    await fetch(`http://localhost:5000/wishlist/remove/${itemId}`, {
      method: "DELETE",
    });

    window.location.reload();
  }
  const dispatch = useDispatch();

  function addDataToCartHandler(_id, name, price, images, clickedSize) {
    uiCtx.toggleCart();
    uiCtx.toggleWishlist();
    dispatch(
      cartActions.addItemToCart({ _id, name, price, images, clickedSize })
    );
  }
  return (
    <>
      {uiCtx.wishlistClicked !== true && (
        <div className="wishlist__content">
          {props.data.map((item) => (
            <div
              onClick={(event) => {
                if (
                  !event.target.classList.contains("wishlist__button") &&
                  !event.target.parentElement.classList.contains(
                    "wishlist__deleteItem"
                  ) &&
                  !event.target.parentElement.parentElement.classList.contains(
                    "wishlist__deleteItem"
                  )
                ) {
                  uiCtx.toggleWishlistDetail();
                  setClickedData(item);
                }
              }}
              key={item._id}
              className="wishlist__item"
            >
              <Button
                onClick={() => removeWishlistHandler(item._id)}
                className="wishlist__deleteItem"
              >
                <X />
              </Button>
              <div className="wishlist__image">
                <img src={item.images[0].url} alt={item.name} />
              </div>
              <div className="wishlist__productsInfo">
                <span className="wishlist__productsInfo--title">
                  {item.name}
                </span>
                <span className="wishlist__productsInfo--size">
                  {item.clickedSize}
                </span>
                <Button
                  onClick={() =>
                    addDataToCartHandler(
                      item._id,
                      item.name,
                      item.price,
                      item.images,
                      item.clickedSize
                    )
                  }
                  className="wishlist__button wishlist__button--addCart"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {uiCtx.wishlistClicked === true && (
        <WishlistSelectedDetail clickedData={clickedData} />
      )}
    </>
  );
};

export default WishlistContent;
