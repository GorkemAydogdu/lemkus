import React, { useRef } from "react";

import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";

const Brands = () => {
  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="brands">
        <h1 className="brands__title">BRANDS</h1>
        <div className="brands__container">
          <div className="brands__item">
            <b>#</b>
            <span>032C</span>
          </div>
          <div className="brands__item">
            <b>A</b>
            <span>ACW</span>
            <span>Adidas</span>
            <span>Air Jordan</span>
            <span>Angelus</span>
            <span>ARTCLUB & FRIENDS</span>
            <span>Asics</span>
          </div>
          <div className="brands__item">
            <b>B</b>
            <span>Birkenstock</span>
            <span>Broke</span>
            <span>Butan</span>
          </div>
          <div className="brands__item">
            <b>C</b>
            <span>Ceremony</span>
            <span>Converse</span>
            <span>Crep</span>
            <span>Crocs</span>
          </div>
          <div className="brands__item">
            <b>D</b>
            <span>Daily Paper</span>
          </div>
          <div className="brands__item">
            <b>E</b>
            <span>Ewing</span>
          </div>
          <div className="brands__item">
            <b>F</b>
            <span>Funko Pop</span>
          </div>
          <div className="brands__item">
            <b>H</b>
            <span>HBN</span>
          </div>
          <div className="brands__item">
            <b>J</b>
            <span>Jason Markk</span>
          </div>
          <div className="brands__item">
            <b>L</b>
            <span>LEAF X LOVERBOYS</span>
            <span>Lemkus</span>
            <span>Levi's</span>
            <span>LUKHANYO MDINGI</span>
          </div>
          <div className="brands__item">
            <b>M</b>
            <span>Mad Dogs</span>
            <span>Maylee</span>
          </div>
          <div className="brands__item">
            <b>N</b>
            <span>New Balance</span>
            <span>Newe</span>
            <span>Nike</span>
            <span>North Face</span>
          </div>
          <div className="brands__item">
            <b>O</b>
            <span>Oakley</span>
          </div>
          <div className="brands__item">
            <b>P</b>
            <span>Puma</span>
          </div>
          <div className="brands__item">
            <b>R</b>
            <span>Ray-Ban</span>
            <span>Reebok</span>
          </div>
          <div className="brands__item">
            <b>S</b>
            <span>SOL SOL</span>
            <span>Sweet-Orr</span>
          </div>
          <div className="brands__item">
            <b>T</b>
            <span>Tino</span>
          </div>
          <div className="brands__item">
            <b>W</b>
            <span>WANDA LEPHOTO</span>
          </div>
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Brands;
