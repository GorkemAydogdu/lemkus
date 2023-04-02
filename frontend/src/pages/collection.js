import React, { useState, useEffect, useRef } from "react";
import {
  Link,
  useParams,
  useLocation,
  useNavigate,
  // useSearchParams,
} from "react-router-dom";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";

import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as Arrow } from "../assets/chevron-right.svg";
import { ReactComponent as X } from "../assets/x.svg";

import gsap from "gsap";
import { Flip } from "gsap/all";
gsap.registerPlugin(Flip);

const Collection = (props) => {
  const [filterClicked, setFilterClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [collection, setCollection] = useState([]);
  const smoothScrollWrapper = useRef();
  const tl = useRef();
  const filterListRef = useRef();
  const collectionContentRef = useRef();
  const mobileMenuRef = useRef();

  async function getProducts() {
    try {
      const res = await fetch("http://localhost:5000/product");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setCollection(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  let { categoryName } = useParams();
  // const location = useLocation();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  // const [searchParams, setSearchParams] = useSearchParams();
  const gender = query.get("gender");
  const category = query.get("category");
  const brand = query.get("brand");

  //https://stackoverflow.com/a/21081760
  const wordInString = (s, word) =>
    new RegExp("\\b" + word + "\\b", "i").test(s);
  // \b kelime sınırı i büyük kucuk harf duyarlılığı

  function closeFilterButtonHandler() {
    const state = Flip.getState(
      ".collection__productsList, .collection__productsItem"
    );

    setFilterClicked((prevState) => !prevState);

    collectionContentRef.current.classList.toggle("is-filter");

    Flip.from(state, {
      absolute: true,
      duration: 0.5,
      ease: "expo.inOut",
    });
  }
  //https://greensock.com/forums/topic/31208-gsap-reverse-not-working-in-react/?do=findComment&comment=155973
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(".collection__filterProduct", {
      duration: 0.5,
      ease: "expo.inOut",
      x: "-110%",
    });
  }, []);

  useEffect(() => {
    filterClicked ? tl.current.play() : tl.current.reverse();
  }, [filterClicked]);

  let data = collection.filter((filtered) => {
    if (
      wordInString(categoryName, filtered.categoryName) &&
      gender === null &&
      category === null &&
      brand === null
    ) {
      return filtered;
    } else if (
      filtered.gender.toLowerCase().replaceAll(" ", "-") === gender &&
      filtered.categoryName.toLowerCase() === categoryName &&
      category === null &&
      brand === null
    ) {
      return filtered;
    } else if (
      filtered.categoryName.toLowerCase() === categoryName &&
      filtered.brand.toLowerCase().replaceAll(" ", "-") === brand &&
      gender === null &&
      category === null
    ) {
      return filtered;
    } else if (
      filtered.categoryName.toLowerCase() === categoryName &&
      filtered.brand.toLowerCase().replaceAll(" ", "-") === brand &&
      filtered.type.toLowerCase().replaceAll(" ", "-") === category &&
      gender === null
    ) {
      return filtered;
    } else if (
      filtered.categoryName.toLowerCase() === categoryName &&
      filtered.brand.toLowerCase().replaceAll(" ", "-") === brand &&
      filtered.gender.toLowerCase().replaceAll(" ", "-") === gender &&
      category === null
    ) {
      return filtered;
    } else if (
      filtered.categoryName.toLowerCase() === categoryName &&
      filtered.type.toLowerCase().replaceAll(" ", "-") === category &&
      filtered.gender.toLowerCase() === gender &&
      brand === null
    ) {
      console.log(filtered);
      return filtered;
    } else if (
      filtered.categoryName.toLowerCase() === categoryName &&
      filtered.type.toLowerCase().replaceAll(" ", "-") === category &&
      filtered.gender.toLowerCase() === gender &&
      filtered.brand.toLowerCase().replaceAll(" ", "-") === brand
    ) {
      return filtered;
    } else if (
      filtered.categoryName.toLowerCase() === categoryName &&
      filtered.type.toLowerCase().replaceAll(" ", "-") === category &&
      gender === null &&
      brand === null
    ) {
      return filtered;
    } else return false;
  });

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

  useEffect(() => {
    let filterProductTitle = document.querySelectorAll(
      ".collection__filterProduct--title"
    );
    let filterProductItem = document.querySelectorAll(
      ".collection__filterProduct--item"
    );

    filterProductTitle.forEach((item) =>
      filterProductItem.forEach((prd) => {
        item.addEventListener("click", () => {
          if (prd.children[0].innerText === item.innerText) {
            prd.classList.toggle("collection__filterProduct--active");
          } else {
            prd.classList.remove("collection__filterProduct--active");
          }
        });
      })
    );
  }, []);

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
    <>
      <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
        <div
          className="collection"
          onClick={(event) => {
            if (
              !event.target.classList.contains("collection__sortBy") &&
              filterListRef.current.classList.contains(
                "collection__filterList--active"
              )
            ) {
              filterListRef.current.classList.remove(
                "collection__filterList--active"
              );
            }
          }}
        >
          <div className="collection__header">
            <h1 className="collection__title">
              {categoryName.replace("-", " ")}
            </h1>
            <div className="collection__searchBox">
              <div className="collection__input">
                <input type="text" placeholder="Search Products" />
              </div>
              <Button className="collection__searchButton">
                <SearchIcon />
              </Button>
            </div>
            <div className="collection__action">
              <Button
                onClick={closeFilterButtonHandler}
                className="collection__hide"
              >
                Hide Filter
              </Button>
              <Button
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  mobileMenuRef.current.classList.toggle(
                    "collection__menuMobile--toggle"
                  );
                }}
                className="collection__filterBy"
              >
                Filter By
              </Button>

              <div ref={filterListRef} className="collection__filterList">
                <span className="collection__totalProducts">
                  <span>{data.length}</span> Products
                </span>
                <div className="collection__showSize">
                  <label htmlFor="setLimit">Show</label>
                  <select name="setLimit" id="setLimit">
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
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
                      <span className="collection__item--brand">
                        {filter.key}
                      </span>
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
                  {typeCount.map((filter) => (
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
                  ))}
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
                      <span className="collection__item--brand">
                        {filter.key}
                      </span>
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
        </div>
        <Footer />
      </SmoothScrollWrapper>
      <div ref={mobileMenuRef} className="collection__menuMobile">
        <div className="collection__filterHeader">
          <span>Filter By</span>
          <Button
            onClick={() => {
              document.body.style.overflow = "visible";
              mobileMenuRef.current.classList.toggle(
                "collection__menuMobile--toggle"
              );
            }}
            className="collection__filterHeader--close"
          >
            <X />
          </Button>
        </div>
        <div className="collection__filterProduct--item">
          <span className="collection__filterProduct--title">
            Brand
            <Arrow />
          </span>

          <ul className="collection__list">
            {brandCount.map((filter) => (
              <li
                onClick={(event) => {
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
            {typeCount.map((filter) => (
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

        <Button
          onClick={() => {
            document.body.style.overflow = "visible";
            mobileMenuRef.current.classList.toggle(
              "collection__menuMobile--toggle"
            );
          }}
          className="collection__menuMobile--button"
        >
          View {data.length} Products
        </Button>
      </div>
    </>
  );
};

export default Collection;
