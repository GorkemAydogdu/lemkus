import React, { useRef } from "react";

import LaunchesHeader from "./launchesHeader";
import LaunchesList from "./launchesList";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Culture from "../../components/Culture/Culture";
import Footer from "../../components/Footer/Footer";
import { RotatingLines } from "react-loader-spinner";

const Launches = ({ products, news }) => {
  const smoothScrollWrapper = useRef();

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
