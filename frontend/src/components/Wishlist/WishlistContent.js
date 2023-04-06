import React, { useState, useContext } from "react";

import UIContext from "../../context/ui-context";
import { ReactComponent as X } from "../../assets/x.svg";
import Button from "../UI/Button";
import WishlistSelectedDetail from "./WishlistSelectedDetail";

const WishlistContent = (props) => {
  const uiCtx = useContext(UIContext);
  const [clickedData, setClickedData] = useState([]);
  return (
    <>
      {uiCtx.wishlistClicked !== true && (
        <div className="wishlist__content">
          {props.data.map((item) => (
            <div
              onClick={() => {
                uiCtx.toggleWishlistDetail();
                setClickedData(item);
              }}
              key={item._id}
              className="wishlist__item"
            >
              <Button className="wishlist__deleteItem">
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
                <Button className="wishlist__button wishlist__button--addCart">
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
