import React from "react";

import { Link } from "react-router-dom";

const SearchContent = ({ filteredProduct }) => {
  return (
    <ul className="search__list search__content">
      <li className="search__item">
        <span className="search__title">Products</span>
        <ul className="search__list">
          {filteredProduct.slice(0, 10).map((item) => (
            <li key={item._id} className="search__item">
              <Link
                className="search__link"
                to={`/products/${item.name
                  .toLowerCase()
                  .replaceAll(/[^a-zA-Z0-9]/g, "-")
                  .replace(/-{2,}/g, "-")
                  .replace(/-$/, "")}?id=${item._id}`}
              >
                <div className="search__image">
                  <img src={item.images[0].url} alt={item.name} />
                </div>
                <div className="search__item--detail">
                  <span className="search__item--title">{item.name}</span>
                  <span className="search__item--brand">{item.brand}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default SearchContent;
