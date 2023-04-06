import React from "react";

import { ReactComponent as X } from "../../assets/x.svg";
import Button from "../UI/Button";

const WishlistContent = (props) => {
  return (
    <div className="wishlist__content">
      {props.data.map((item) => (
        <div key={item._id} className="wishlist__item">
          <Button className="wishlist__deleteItem">
            <X />
          </Button>
          <div className="wishlist__image">
            <img src={item.images[0].url} alt={item.name} />
          </div>
          <div className="wishlist__productsInfo">
            <span className="wishlist__productsInfo--title">{item.name}</span>
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
  );
};

export default WishlistContent;
