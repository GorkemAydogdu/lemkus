import React, { useRef, useEffect, useState } from "react";

import LaunchesHeader from "./launchesHeader";
import LaunchesList from "./launchesList";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Culture from "../../components/Culture/Culture";
import Footer from "../../components/Footer/Footer";

const Launches = () => {
  const smoothScrollWrapper = useRef();
  const [product, setProduct] = useState([]);
  const [completeFetch, setCompleteFetch] = useState(false);

  async function getProduct() {
    try {
      setCompleteFetch(false);
      const res = await fetch("http://localhost:5000/product");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setCompleteFetch(true);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      <div className="launches">
        <LaunchesHeader product={product} completeFetch={completeFetch} />
        <LaunchesList product={product} />
      </div>
      <Culture />
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Launches;
