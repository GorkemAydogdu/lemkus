import React from "react";

const CollectionDetailDescription = ({ details }) => {
  return (
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
        <p className="collectionDetail__descriptionContent">{details}</p>
      </div>
      <div
        onClick={(event) => {
          event.currentTarget.classList.toggle(
            "collectionDetail__descriptionItem--active"
          );
        }}
        className="collectionDetail__descriptionItem"
      >
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
          Lemkus.com exclusively uses RAM, one of the leading Courier Companies
          in SA offering door to door FREE delivery on every order over R800.
          <b className="collectionDetail__descriptionContent--title">
            Returns:
          </b>
          Please see our returns and exchanges section for more information.
        </p>
      </div>
    </div>
  );
};

export default CollectionDetailDescription;
