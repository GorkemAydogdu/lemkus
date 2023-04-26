import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";

import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import CollectionHeader from "./collectionHeader";
import CollectionContent from "./collectionContent";
import Footer from "../../components/Footer/Footer";
import { RotatingLines } from "react-loader-spinner";

const Collection = () => {
  const smoothScrollWrapper = useRef();
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(true);
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
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, [brand, category, categoryName, gender]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  //https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
  return (
    <>
      <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
        <div className="collection">
          {isLoading === true ? (
            <div className="wrapper">
              <RotatingLines
                className="loading"
                strokeColor="grey"
                strokeWidth="5"
                animationDuration=".75"
                width="96"
                visible={true}
              />
            </div>
          ) : (
            <>
              <CollectionHeader
                categoryName={categoryName}
                dataLength={collection.length}
              />
              <CollectionContent
                dataLength={collection.length}
                data={collection}
                itemPerPage={12}
                categoryName={categoryName}
              />
            </>
          )}
        </div>
        <Footer />
      </SmoothScrollWrapper>
    </>
  );
};

export default Collection;
