import React, { useRef, useEffect, useState } from "react";

import LaunchesHeader from "./launchesHeader";
import LaunchesList from "./launchesList";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Culture from "../../components/Culture/Culture";
import Footer from "../../components/Footer/Footer";
import { RotatingLines } from "react-loader-spinner";

const Launches = ({ products, news }) => {
  const smoothScrollWrapper = useRef();

  // async function getProduct() {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch("http://localhost:5000/product");
  //     if (!res.ok) {
  //       throw Error("Something went wrong");
  //     }
  //     const data = await res.json();
  //     setProduct(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      {products === [] ? (
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
          <div className="launches">
            <LaunchesHeader product={products} />
            <LaunchesList product={products} />
          </div>
          <Culture news={news} />
        </>
      )}
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Launches;
