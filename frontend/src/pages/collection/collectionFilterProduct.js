import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Arrow } from "../../assets/chevron-right.svg";
const CollectionFilterProduct = ({ filterBrand, filterType, filterGender }) => {
  const [brandIsActive, setBrandIsActive] = useState(false);
  const [typeIsActive, setTypeIsActive] = useState(false);
  const [genderIsActive, setGenderIsActive] = useState(false);

  function filterData(data) {
    return Array.from(
      data.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
      ([key, count]) => ({ key, count })
    );
  }

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
                setBrandIsActive((prevState) => !prevState);
                addQuery(
                  "brand",
                  filter.key.toLowerCase().replaceAll(" ", "-")
                );
              }}
              key={Math.random()}
              className={`collection__item ${
                brandIsActive ? "collection__item--active" : ""
              }`}
            >
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">{filter.key}</span>
              <span className="collection__item--count">({filter.count})</span>
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
                  onClick={() => {
                    setTypeIsActive((prevState) => !prevState);
                    addQuery(
                      "category",
                      filter.key.toLowerCase().replaceAll(" ", "-")
                    );
                  }}
                  key={Math.random()}
                  className={`collection__item ${
                    typeIsActive ? "collection__item--active" : ""
                  }`}
                >
                  <span className="collection__item--checkbox"></span>
                  <span className="collection__item--brand">{filter.key}</span>
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
              onClick={() => {
                setGenderIsActive((prevState) => !prevState);
                addQuery(
                  "gender",
                  filter.key.toLowerCase().replaceAll(" ", "-")
                );
              }}
              key={Math.random()}
              className={`collection__item ${
                genderIsActive ? "collection__item--active" : ""
              }`}
            >
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">{filter.key}</span>
              <span className="collection__item--count">({filter.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionFilterProduct;
