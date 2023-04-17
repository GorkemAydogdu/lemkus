import React, { useRef } from "react";

import CollectionList from "./collectionList";
import CollectionFilterProduct from "./collectionFilterProduct";
import CollectionMenuMobile from "./collectionMenuMobile";

const CollectionContent = ({ categoryName, data, dataLength, itemPerPage }) => {
  const collectionContentRef = useRef();

  let filterBrand = data.map((filter) => filter.brand);
  let filterType = data.map((filter) => filter.type);
  let filterGender = data.map((filter) => filter.gender);

  return (
    <>
      <div ref={collectionContentRef} className="collection__content">
        <CollectionFilterProduct
          className="collection__filterProduct"
          filterBrand={filterBrand}
          filterGender={filterGender}
          filterType={filterType}
        />
        <CollectionList
          categoryName={categoryName}
          data={data}
          itemPerPage={itemPerPage}
        />
      </div>

      <CollectionMenuMobile
        filterBrand={filterBrand}
        filterGender={filterGender}
        filterType={filterType}
        dataLength={dataLength}
      />
    </>
  );
};

export default CollectionContent;
