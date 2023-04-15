import React from "react";

import ProductsItem from "../../components/Products/ProductsItem";

const CollectionList = ({ categoryName, data }) => {
  return (
    <ul className="collection__productsList products__list">
      {data.map((item) => (
        <ProductsItem
          className="collection__productsItem products__item"
          categoryName={categoryName}
          key={item._id}
          id={item._id}
          logo={item.logo}
          name={item.name}
          images={item.images.slice(0, 2)}
          sizes={item.sizes}
          price={item.price}
          brand={item.brand}
        />
      ))}
    </ul>
  );
};

export default CollectionList;
