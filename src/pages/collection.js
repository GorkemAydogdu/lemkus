import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

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
  const smoothScrollWrapper = useRef();
  const tl = useRef();
  const filterListRef = useRef();
  const [filterClicked, setFilterClicked] = useState(false);
  const collectionContentRef = useRef();
  const mobileMenuRef = useRef();

  let { categoryName } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const name = query.get("name");
  const type = query.get("category");

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

  props.items.map((product) =>
    product.items.filter((filtered) => {
      if (
        (filtered.brand.toLowerCase() === name &&
          filtered.categoryName.toLowerCase() === categoryName) ||
        (filtered.categoryName.toLowerCase() === categoryName &&
          filtered.gender.toLowerCase().replace(" ", "-") === name)
      ) {
        console.log(filtered);
        // return filtered;
      }
      // else if (
      //   (filtered.type.toLowerCase().replace(" ", "-") === type &&
      //     filtered.gender.toLowerCase() === name) ||
      //   (filtered.gender.toLowerCase() === name &&
      //     filtered.categoryName.toLowerCase() === categoryName)
      // ) {
      //   console.log(filtered);
      //   // return filtered;
      // }
      // else if (filtered.gender.toLowerCase().replace(" ", "-") === name) {
      //   console.log("3");

      //   // return filtered;
      // }
      // else if (wordInString(categoryName, filtered.categoryName)) {
      //   console.log("4");

      //   // return filtered;
      // }
    })
  );

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
            <h1 className="collection__title">Sneakers</h1>
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
                  mobileMenuRef.current.style.left = "0%";
                }}
                className="collection__filterBy"
              >
                Filter By
              </Button>

              <div ref={filterListRef} className="collection__filterList">
                <span className="collection__totalProducts">
                  <span>311</span> Products
                </span>
                <div className="collection__showSize">
                  <label htmlFor="setLimit">Show</label>
                  <select name="setLimit" id="setLimit">
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                  </select>
                </div>
                <Button
                  onClick={() => {
                    filterListRef.current.classList.toggle(
                      "collection__filterList--active"
                    );
                  }}
                  className="collection__sortBy"
                >
                  Date,new to old
                  <div className="collection__sortOption">
                    <span>Best Selling</span>
                    <span>Alphabetically, A-Z</span>
                    <span>Alphabetically, Z-A</span>
                    <span>Price,low to high</span>
                    <span>Price,high to low</span>
                    <span>Date,new to old</span>
                    <span>Date,old to new</span>
                    <span>% Sale off</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div ref={collectionContentRef} className="collection__content">
            <div className="collection__filterProduct">
              <div className="collection__filterProduct--item collection__filterProduct--active">
                <span className="collection__filterProduct--title">
                  Brand
                  <Arrow />
                </span>

                <ul className="collection__list collection__list--active">
                  <li className="collection__item collection__item--active">
                    <span className="collection__item--checkbox"></span>
                    <span className="collection__item--brand">Adidas</span>
                    <span className="collection__item--count">(57)</span>
                  </li>
                  <li className="collection__item">
                    <span className="collection__item--checkbox"></span>
                    <span className="collection__item--brand">Adidas</span>
                    <span className="collection__item--count">(57)</span>
                  </li>
                </ul>
              </div>
              <div className="collection__filterProduct--item">
                <span className="collection__filterProduct--title">
                  Sneaker Style
                  <Arrow />
                </span>

                <ul className="collection__list">
                  <li className="collection__item">
                    <span className="collection__item--checkbox"></span>
                    <span className="collection__item--brand">Adidas</span>
                    <span className="collection__item--count">(57)</span>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="collection__productsList products__list">
              {/* {props.items[0].items.map((item) => {
                if (
                  item.categoryName.toLowerCase() === categoryName &&
                  item.gender.toLowerCase() === name &&
                  item.type.toLowerCase().replace(" ", "-") === type
                ) {
                  console.log(item);
                } else if (
                  item.categoryName.toLowerCase() === categoryName &&
                  item.brand.toLowerCase() === name
                ) {
                  console.log(item);
                } else if (
                  item.categoryName.toLowerCase() === categoryName &&
                  item.gender.toLowerCase().replace(" ", "-") === name
                ) {
                  console.log(item);
                } else if (wordInString(categoryName, item.categoryName)) {
                  console.log(item);
                }
              })} */}
              {/* {props.items[0].items.filter((filtered) => {
                if (
                  filtered.categoryName.toLowerCase() === categoryName &&
                  filtered.gender.toLowerCase() === name &&
                  filtered.type.toLowerCase().replace(" ", "-") === type
                ) {
                  console.log(filtered);
                } else if (
                  filtered.categoryName.toLowerCase() === categoryName &&
                  filtered.brand.toLowerCase() === name
                ) {
                  console.log(filtered);
                } else if (
                  filtered.categoryName.toLowerCase() === categoryName &&
                  filtered.gender.toLowerCase().replace(" ", "-") === name
                ) {
                  console.log(filtered);
                } else if (wordInString(categoryName, filtered.categoryName)) {
                  console.log(filtered);
                }

                // if (
                //   filtered.categoryName.toLowerCase() === categoryName &&
                //   filtered.brand.toLowerCase() === name
                // ) {
                //   console.log(filtered);
                // } else if (
                //   filtered.categoryName.toLowerCase() === categoryName &&
                //   filtered.gender.toLowerCase().replace(" ", "-") === name &&
                //   filtered.type.toLowerCase().replace(" ", "-") === type
                // ) {
                //   console.log(filtered);
                // }
              })} */}
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
              mobileMenuRef.current.style.left = "-100%";
            }}
            className="collection__filterHeader--close"
          >
            <X />
          </Button>
        </div>
        <div className="collection__filterProduct--item collection__filterProduct--active">
          <span className="collection__filterProduct--title">
            Brand
            <Arrow />
          </span>

          <ul className="collection__list collection__list--active">
            <li className="collection__item collection__item--active">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
          </ul>
        </div>
        <div className="collection__filterProduct--item">
          <span className="collection__filterProduct--title">
            Sneaker Style
            <Arrow />
          </span>

          <ul className="collection__list">
            <li className="collection__item">
              <span className="collection__item--checkbox"></span>
              <span className="collection__item--brand">Adidas</span>
              <span className="collection__item--count">(57)</span>
            </li>
          </ul>
        </div>

        <Button
          onClick={() => {
            document.body.style.overflow = "visible";
            mobileMenuRef.current.style.left = "-100%";
          }}
          className="collection__menuMobile--button"
        >
          View 302 Products
        </Button>
      </div>
    </>
  );
};

export default Collection;
