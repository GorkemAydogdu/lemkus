import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

import gsap from "gsap";

import NewsDetailHeader from "./newsDetailHeader";
import NewsDetailContent from "./newsDetailContent";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Footer from "../../components/Footer/Footer";
import Culture from "../../components/Culture/Culture";

const NewsDetail = ({ news }) => {
  const [completeFetch, setCompleteFetch] = useState(false);
  const [clickedNews, setClickedNews] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setCompleteFetch(false);
        const res = await fetch(`http://localhost:5000/news/${id}`);
        const data = await res.json();
        setClickedNews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        window.scrollTo(0, 0);
        setCompleteFetch(true);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    if (completeFetch) {
      gsap.from(".newsDetail__header", {
        y: "20%",
        opacity: 0,
        duration: 0.5,
      });
      gsap.from(".newsDetail__content", {
        y: "20%",
        opacity: 0,
        delay: 0.2,
        duration: 0.8,
      });
    }
  }, [completeFetch]);

  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      {clickedNews && (
        <div key={clickedNews.id} className="newsDetail">
          <NewsDetailHeader clickedNews={clickedNews} />
          <NewsDetailContent clickedNews={clickedNews} />
        </div>
      )}
      <Culture news={news} />
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default NewsDetail;
