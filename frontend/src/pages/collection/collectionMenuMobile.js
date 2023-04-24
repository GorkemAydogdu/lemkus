import React, { useRef } from "react";

import Button from "../../components/UI/Button";
import X from "../../assets/x.svg";
import CollectionFilterProduct from "./collectionFilterProduct";

const CollectionFilterM = ({
  dataLength,
  filterBrand,
  filterType,
  filterGender,
}) => {
  const mobileMenuRef = useRef();

  return (
    <div ref={mobileMenuRef} className="collection__filterMobile">
      <div className="collection__filterHeader">
        <span>Filter By</span>
        <Button
          onClick={() => {
            document.body.style.overflow = "visible";
            mobileMenuRef.current.classList.toggle(
              "collection__filterMobile--toggle"
            );
          }}
          className="collection__filterHeader--close"
        >
          <X />
        </Button>
      </div>
      <CollectionFilterProduct
        filterBrand={filterBrand}
        filterGender={filterGender}
        filterType={filterType}
      />

      <Button
        onClick={() => {
          document.body.style.overflow = "visible";
          mobileMenuRef.current.classList.toggle(
            "collection__filterMobile--toggle"
          );
        }}
        className="collection__filterMobile--button"
      >
        View {dataLength} Products
      </Button>
    </div>
  );
};

export default CollectionFilterM;
