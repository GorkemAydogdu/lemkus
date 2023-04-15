import React from "react";

import ProductsItem from "../../components/Products/ProductsItem";

const LaunchesListVariant = ({ product }) => {
  return (
    <ul className="splide__list launches__list launches__list--variant">
      {/* https://stackoverflow.com/a/42374933/19191132 */}
      {product
        .filter((filtered) => filtered.categoryName === "Launches")
        .slice(0, 5)
        .map((item) => (
          <ProductsItem
            className="splide__slide launches__item launches__item--variant"
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

export default LaunchesListVariant;
