import React from "react";

import Button from "../components/UI/Button";

const CollectionDetail = () => {
  return (
    <div className="collectionDetail">
      <div className="collectionDetail__thumbnail">ZORT</div>
      <div className="collectionDetail__images">ZORT</div>
      <div className="collectionDetail__infos">
        <h1 className="collectionDetail__title">Centennial 85 Low</h1>
        <div className="collectionDetail__priceGuide">
          <span className="collectionDetail__price">R 1,899.00</span>
          <a
            href="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Lemkus_Approved.pdf"
            className="collectionDetail__guide underline"
          >
            Size Guide
          </a>
        </div>
        <div className="collectionDetail__sizes">
          <Button className="collectionDetail__size">6</Button>
          <Button className="collectionDetail__size">7</Button>
          <Button className="collectionDetail__size">8</Button>
          <Button className="collectionDetail__size">9</Button>
        </div>
        <div className="collectionDetail__action">
          <Button className="collectionDetail__addToBag btn-hover">
            <span className="static">Add To Bag</span>
            <span className="hover">
              ADD TO BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
              BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
              BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
              BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Button>
          <Button className="collectionDetail__wishlist collectionDetail__wishlist--disable btn-hover">
            <span className="static">Wishlist</span>
            <span className="hover">
              Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Button>
        </div>
        <div className="collectionDetail__description">
          <div
            onClick={(event) => {
              event.currentTarget.classList.toggle(
                "collectionDetail__descriptionItem--active"
              );
            }}
            className="collectionDetail__descriptionItem"
          >
            <h5 className="collectionDetail__description--title">Details</h5>
            <div className="collectionDetail__plus">
              <span className="collectionDetail__plus--static"></span>
              <span className="collectionDetail__plus--rotate"></span>
            </div>
            <p className="collectionDetail__descriptionContent">
              The adidas Centennial pulled up to the hardwood in '85 and quickly
              set itself apart from the rest. These men's shoes honour those
              basketball roots with a suede upper that nods to their beginning.
              Perforated details on the toe and the spoiler flex on the heel
              give a retro pop of texture.
            </p>
          </div>
          <div className="collectionDetail__descriptionItem">
            <h5 className="collectionDetail__description--title">
              Shipping/Returns
            </h5>
            <div className="collectionDetail__plus">
              <span className="collectionDetail__plus--static"></span>
              <span className="collectionDetail__plus--rotate"></span>
            </div>
            <p className="collectionDetail__descriptionContent">
              <b className="collectionDetail__descriptionContent--title">
                Shipping:
              </b>
              Lemkus.com exclusively uses RAM, one of the leading Courier
              Companies in SA offering door to door FREE delivery on every order
              over R800.
              <b className="collectionDetail__descriptionContent--title">
                Returns:
              </b>
              Please see our returns and exchanges section for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
