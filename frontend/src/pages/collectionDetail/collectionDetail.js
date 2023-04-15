import React, { useEffect, useCallback, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import CollectionDetailImages from "./collectionDetailImages";
import CollectionDetailAction from "./collectionDetailAction";
import CollectionDetailDescription from "./collectionDetailDescription";
import CollectionDetailSizes from "./collectionDetailSizes";
import CollectionDetailPrice from "./collectionDetailPrice";

import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Culture from "../../components/Culture/Culture";
import Footer from "../../components/Footer/Footer";

const CollectionDetail = () => {
  const smoothScrollWrapper = useRef();
  const [clickedData, setClickedData] = useState([]);
  const [completeFetch, setCompleteFetch] = useState(false);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  const clickedSize = query.get("size");
  const id = query.get("id");

  const getClickedProduct = useCallback(async () => {
    try {
      setCompleteFetch(false);
      const res = await fetch(`http://localhost:5000/product/${id}`);
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();

      setClickedData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setCompleteFetch(true);
    }
  }, [id]);

  useEffect(() => {
    getClickedProduct();
  }, [getClickedProduct]);

  useEffect(() => {
    const sizes = document.querySelectorAll(".collectionDetail__size");
    if (completeFetch !== false) {
      if (clickedSize) {
        for (let i = 0; i < sizes.length; i++) {
          if (clickedSize === sizes[i].innerHTML) {
            sizes[i].classList.add("collectionDetail__size--active");
            document
              .querySelector(".collectionDetail__wishlist")
              .classList.remove("collectionDetail__wishlist--disable");
          }
        }
      }
    }
  }, [completeFetch, clickedSize]);

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="collectionDetail">
        {completeFetch !== false && (
          <>
            <CollectionDetailImages
              clickedData={clickedData}
              completeFetch={completeFetch}
            />
            <div className="collectionDetail__infos">
              <h1 className="collectionDetail__title">{clickedData.name}</h1>
              <CollectionDetailPrice price={clickedData.price} />
              <CollectionDetailSizes clickedData={clickedData} />
              <CollectionDetailAction
                completeFetch={completeFetch}
                clickedData={clickedData}
                clickedSize={clickedSize}
              />
              <CollectionDetailDescription details={clickedData.details} />
            </div>
          </>
        )}
      </div>
      <Culture />
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default CollectionDetail;
