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
          <div className="collectionDetail__descriptionItem"></div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
