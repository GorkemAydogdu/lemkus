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

import { RotatingLines } from "react-loader-spinner";

const CollectionDetail = ({ news }) => {
  const smoothScrollWrapper = useRef();
  const [clickedData, setClickedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  const clickedSize = query.get("size");
  const id = query.get("id");

  const getClickedProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://lemkus-backend.onrender.com/product/${id}`
      );
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setClickedData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    getClickedProduct();
  }, [getClickedProduct]);

  useEffect(() => {
    const sizes = document.querySelectorAll(".collectionDetail__size");
    if (isLoading === false) {
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
  }, [isLoading, clickedSize]);

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
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
          <div className="collectionDetail">
            <CollectionDetailImages
              clickedData={clickedData}
              isLoading={isLoading}
            />
            <div className="collectionDetail__infos">
              <h1 className="collectionDetail__title">{clickedData.name}</h1>
              <CollectionDetailPrice price={clickedData.price} />
              <CollectionDetailSizes clickedData={clickedData} />
              <CollectionDetailAction
                isLoading={isLoading}
                clickedData={clickedData}
                clickedSize={clickedSize}
              />
              <CollectionDetailDescription details={clickedData.details} />
            </div>
          </div>
          <Culture news={news} />
        </>
      )}
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default CollectionDetail;
