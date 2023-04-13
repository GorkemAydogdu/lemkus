import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  useParams,
  useLocation,
  // useSearchParams,
} from "react-router-dom";

import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import CollectionHeader from "./collectionHeader";
import CollectionContent from "./collectionContent";
import Footer from "../../components/Footer/Footer";

import gsap from "gsap";
import { Flip } from "gsap/all";
gsap.registerPlugin(Flip);

const Collection = () => {
  const smoothScrollWrapper = useRef();
  const [collection, setCollection] = useState([]);
  // const mobileMenuRef = useRef();

  //https://stackoverflow.com/a/21081760
  const wordInString = (s, word) =>
    new RegExp("\\b" + word + "\\b", "i").test(s);
  // \b kelime sınırı i büyük kucuk harf duyarlılığı

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const gender = query.get("gender");
  const category = query.get("category");
  const brand = query.get("brand");
  let { categoryName } = useParams();

  const getProducts = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/product");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setCollection(
        data.filter((filtered) => {
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
          } else if (
            filtered.brand.toLowerCase().replaceAll(" ", "-") === categoryName
          ) {
            return filtered;
          } else return false;
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  }, [brand, category, categoryName, gender]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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

  return (
    <>
      <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
        <div className="collection">
          <CollectionHeader
            categoryName={categoryName}
            dataLenght={collection.length}
          />
          <CollectionContent data={collection} categoryName={categoryName} />
        </div>
        <Footer />
      </SmoothScrollWrapper>
      {/* <div ref={mobileMenuRef} className="collection__menuMobile">
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
      </div> */}
    </>
  );
};

export default Collection;
