import React, { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/chevron-right.svg";

const CollectionContent = ({ categoryName, data }) => {
  const [isActive, setIsActive] = useState(false);

  const collectionContentRef = useRef();

  function filterData(data) {
    return Array.from(
      data.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
      ([key, count]) => ({ key, count })
    );
  }

  let filterBrand = data.map((filter) => filter.brand);
  let filterType = data.map((filter) => filter.type);
  let filterGender = data.map((filter) => filter.gender);

  const brandCount = filterData(filterBrand);
  const typeCount = filterData(filterType);
  const genderCount = filterData(filterGender);

  const navigate = useNavigate();
  //https://stackoverflow.com/a/61991128
  const addQuery = (key, value) => {
    let pathname = window.location.pathname;
    // returns path: '/app/books'
    let searchParams = new URLSearchParams(window.location.search);
    // returns the existing query string: '?type=fiction&author=fahid'
    searchParams.set(key, value);
    navigate({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };
  return (
    <div ref={collectionContentRef} className="collection__content">
      <div className="collection__filterProduct">
        <div className="collection__filterProduct--item">
          <span className="collection__filterProduct--title">
            Brand
            <Arrow />
          </span>

          <ul className="collection__list">
            {brandCount.map((filter) => (
              <li
                onClick={() => {
                  //DÜZELTİLECEK
                  setIsActive((prevState) => !prevState);
                  addQuery(
                    "brand",
                    filter.key.toLowerCase().replaceAll(" ", "-")
                  );
                }}
                key={Math.random()}
                className={`collection__item ${
                  isActive ? "collection__item--active" : ""
                }`}
              >
                <span className="collection__item--checkbox"></span>
                <span className="collection__item--brand">{filter.key}</span>
                <span className="collection__item--count">
                  ({filter.count})
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="collection__filterProduct--item">
          <span className="collection__filterProduct--title">
            Type
            <Arrow />
          </span>

          <ul className="collection__list">
            {typeCount.map((filter) => {
              if (filter.key !== "") {
                return (
                  <li
                    onClick={(event) => {
                      setIsActive((prevState) => !prevState);

                      addQuery(
                        "category",
                        filter.key.toLowerCase().replaceAll(" ", "-")
                      );
                    }}
                    key={Math.random()}
                    className={`collection__item ${
                      isActive ? "collection__item--active" : ""
                    }`}
                  >
                    <span className="collection__item--checkbox"></span>
                    <span className="collection__item--brand">
                      {filter.key}
                    </span>
                    <span className="collection__item--count">
                      ({filter.count})
                    </span>
                  </li>
                );
              } else return false;
            })}
          </ul>
        </div>
        <div className="collection__filterProduct--item">
          <span className="collection__filterProduct--title">
            Gender
            <Arrow />
          </span>

          <ul className="collection__list">
            {genderCount.map((filter) => (
              <li
                onClick={(event) => {
                  setIsActive((prevState) => !prevState);

                  addQuery(
                    "gender",
                    filter.key.toLowerCase().replaceAll(" ", "-")
                  );
                }}
                key={Math.random()}
                className={`collection__item ${
                  isActive ? "collection__item--active" : ""
                }`}
              >
                <span className="collection__item--checkbox"></span>
                <span className="collection__item--brand">{filter.key}</span>
                <span className="collection__item--count">
                  ({filter.count})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="collection__productsList products__list">
        {data.map((item) => (
          <li
            key={item._id}
            className="collection__productsItem products__item"
          >
            {/* 
          https://stackoverflow.com/a/9705227
          https://stackoverflow.com/a/36630251
          */}
            <div className="products__container">
              <Link
                to={`/collections/${categoryName}/${item.name
                  .toLowerCase()
                  .replaceAll(/[^a-zA-Z0-9]/g, "-")
                  .replace(/-{2,}/g, "-")
                  .replace(/-$/, "")}?id=${item._id}`}
                className="products__image"
              >
                <div className="products__logo">
                  <img src={item.logo} alt={item.brand} />
                </div>

                {item.images.slice(0, 2).map((image) => (
                  <img
                    key={image.id}
                    className={`products__image--${image.id}`}
                    src={image.url}
                    alt={item.name}
                  />
                ))}
              </Link>

              <div className="products__infos">
                <div className="products__container--size">
                  {item.sizes.map((size) => (
                    <Link
                      key={size}
                      to={`/collections/${categoryName}/${item.name
                        .toLowerCase()
                        .replaceAll(/[^a-zA-Z0-9]/g, "-")
                        .replace(/-{2,}/g, "-")
                        .replace(/-$/, "")}?id=${item._id}&size=${size}`}
                    >
                      {size}
                    </Link>
                  ))}
                </div>
                <Link
                  to={`/collections/${categoryName}/${item.name
                    .toLowerCase()
                    .replaceAll(/[^a-zA-Z0-9]/g, "-")
                    .replace(/-{2,}/g, "-")
                    .replace(/-$/, "")}?id=${item._id}`}
                  className="products__container--title"
                >
                  {item.name}
                </Link>
                <span className="products__container--price">
                  R {item.price}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionContent;
