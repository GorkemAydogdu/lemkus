import React from "react";

import { ReactComponent as X } from "../../assets/x.svg";
import Button from "../UI/Button";

const WishlistContent = () => {
  return (
    <div className="wishlist__content">
      <div className="wishlist__item">
        <Button className="wishlist__deleteItem">
          <X />
        </Button>
        <div className="wishlist__image">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-1.png?v=1665052479"
            alt="Jordan Delta 3 Low"
          />
        </div>
        <div className="wishlist__productsInfo">
          <span className="wishlist__productsInfo--title">
            Jordan Delta 3 Low
          </span>
          <span className="wishlist__productsInfo--size">6</span>
          <Button className="wishlist__button wishlist__button--addCart">
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="wishlist__item">
        <Button className="wishlist__deleteItem">
          <X />
        </Button>
        <div className="wishlist__image">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-1.png?v=1665052479"
            alt="Jordan Delta 3 Low"
          />
        </div>
        <div className="wishlist__productsInfo">
          <span className="wishlist__productsInfo--title">
            Jordan Delta 3 Low
          </span>
          <span className="wishlist__productsInfo--size">6</span>
          <Button className="wishlist__button wishlist__button--addCart">
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="wishlist__item">
        <Button className="wishlist__deleteItem">
          <X />
        </Button>
        <div className="wishlist__image">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-1.png?v=1665052479"
            alt="Jordan Delta 3 Low"
          />
        </div>
        <div className="wishlist__productsInfo">
          <span className="wishlist__productsInfo--title">
            Jordan Delta 3 Low
          </span>
          <span className="wishlist__productsInfo--size">6</span>
          <Button className="wishlist__button wishlist__button--addCart">
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="wishlist__item">
        <Button className="wishlist__deleteItem">
          <X />
        </Button>
        <div className="wishlist__image">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-1.png?v=1665052479"
            alt="Jordan Delta 3 Low"
          />
        </div>
        <div className="wishlist__productsInfo">
          <span className="wishlist__productsInfo--title">
            Jordan Delta 3 Low
          </span>
          <span className="wishlist__productsInfo--size">6</span>
          <Button className="wishlist__button wishlist__button--addCart">
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="wishlist__item">
        <Button className="wishlist__deleteItem">
          <X />
        </Button>
        <div className="wishlist__image">
          <img
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DM3384-600-1.png?v=1665052479"
            alt="Jordan Delta 3 Low"
          />
        </div>
        <div className="wishlist__productsInfo">
          <span className="wishlist__productsInfo--title">
            Jordan Delta 3 Low
          </span>
          <span className="wishlist__productsInfo--size">6</span>
          <Button className="wishlist__button wishlist__button--addCart">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistContent;
