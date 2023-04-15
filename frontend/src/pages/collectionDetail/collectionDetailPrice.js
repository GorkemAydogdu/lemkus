import React from "react";

const CollectionDetailPrice = ({ price }) => {
  return (
    <div className="collectionDetail__priceGuide">
      <span className="collectionDetail__price">R {price}</span>
      <a
        href="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Lemkus_Approved.pdf"
        target="_blank"
        rel="noreferrer"
        className="collectionDetail__guide underline"
      >
        Size Guide
      </a>
    </div>
  );
};

export default CollectionDetailPrice;
