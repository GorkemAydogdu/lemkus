import React from "react";
import ProductsItem from "../../components/Products/ProductsItem";

const LaunchesList = ({ product }) => {
  return (
    <ul className="launches__list launches__list--all">
      {product
        .filter((filtered) => filtered.categoryName === "Launches")
        .map((item) => (
          <ProductsItem
            className="launches__item launches__item--all"
            key={item._id}
            logo={item.logo}
            id={item._id}
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

export default LaunchesList;
