import React from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Button from "../../components/UI/Button";
import { ReactComponent as Arrow } from "../../assets/chevron-right.svg";
import { ReactComponent as X } from "../../assets/x.svg";
const CollectionFilterProduct = ({ filterBrand, filterType, filterGender }) => {
  function filterData(data) {
    return Array.from(
      data.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
      ([key, count]) => ({ key, count })
    );
  }

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  const brand = query.get("brand");
  const gender = query.get("gender");
  const category = query.get("category");

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
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="collection__filterProduct">
      {(searchParams.has("brand") ||
        searchParams.has("category") ||
        searchParams.has("gender")) && (
        <div className="collection__filteredList">
          <div className="collection__filteredHeader">
            <h3>Filter By</h3>
            <Button
              onClick={() => {
                if (
                  searchParams.has("brand") ||
                  searchParams.has("gender") ||
                  searchParams.has("category")
                ) {
                  searchParams.delete("brand");
                  searchParams.delete("gender");
                  searchParams.delete("category");
                  setSearchParams(searchParams);
                }
              }}
              className="collection__clearAll underline"
            >
              Clear All
            </Button>
          </div>
          <div className="collection__filteredGroup">
            {brand && (
              <Button
                onClick={() => {
                  if (searchParams.has("brand")) {
                    searchParams.delete("brand");
                    setSearchParams(searchParams);
                  }
                }}
                className="collection__filteredButton"
              >
                <span>{brand.replaceAll("-", " ")}</span> <X />
              </Button>
            )}
            {gender && (
              <Button
                onClick={() => {
                  if (searchParams.has("gender")) {
                    searchParams.delete("gender");
                    setSearchParams(searchParams);
                  }
                }}
                className="collection__filteredButton"
              >
                <span>{gender.replaceAll("-", " ")}</span> <X />
              </Button>
            )}
            {category && (
              <Button
                onClick={() => {
                  if (searchParams.has("category")) {
                    searchParams.delete("category");
                    setSearchParams(searchParams);
                  }
                }}
                className="collection__filteredButton"
              >
                <span>{category.replaceAll("-", " ")}</span> <X />
              </Button>
            )}
          </div>
        </div>
      )}
      <div className="collection__filterProduct--item">
        <span className="collection__filterProduct--title">
          Brand
          <Arrow />
        </span>

        <ul className="collection__list">
          {brandCount.map((filter) => (
            <li
              onClick={() => {
                addQuery(
                  "brand",
                  filter.key.toLowerCase().replaceAll(" ", "-")
                );
              }}
              key={Math.random()}
              className={`collection__item ${
                brand === filter.key.toLowerCase().replaceAll(" ", "-") &&
                "collection__item--active"
              }`}
            >
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--name">{filter.key}</span>
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
                    addQuery(
                      "category",
                      filter.key.toLowerCase().replaceAll(" ", "-")
                    );
                  }}
                  key={Math.random()}
                  className={`collection__item ${
                    category ===
                      filter.key.toLowerCase().replaceAll(" ", "-") &&
                    "collection__item--active"
                  }`}
                >
                  <span className="collection__item--checkbox"></span>
                  <span className="collection__item--name">{filter.key}</span>
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
                addQuery(
                  "gender",
                  filter.key.toLowerCase().replaceAll(" ", "-")
                );
              }}
              key={Math.random()}
              className={`collection__item ${
                gender === filter.key.toLowerCase().replaceAll(" ", "-") &&
                "collection__item--active"
              }`}
            >
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--name">{filter.key}</span>
              <span className="collection__item--count">({filter.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionFilterProduct;
