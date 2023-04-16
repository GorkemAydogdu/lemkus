import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";

import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import CollectionHeader from "./collectionHeader";
import CollectionContent from "./collectionContent";
import PaginatedItems from "./PaginatedItems";
import Footer from "../../components/Footer/Footer";

const Collection = () => {
  const smoothScrollWrapper = useRef();
  const [collection, setCollection] = useState([]);

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
  //https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
  return (
    <>
      <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
        <div className="collection">
          <PaginatedItems itemPerPage={12} items={collection} />

          <CollectionHeader
            categoryName={categoryName}
            dataLenght={collection.length}
          />
          <CollectionContent
            dataLenght={collection.length}
            data={collection}
            categoryName={categoryName}
          />
        </div>
        <Footer />
      </SmoothScrollWrapper>
    </>
  );
};

export default Collection;
