import React, { useEffect } from "react";

// import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Button from "../components/UI/Button";
import Culture from "../components/Culture/Culture";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

const CollectionDetail = () => {
  // const smoothScrollWrapper = useRef();

  useEffect(() => {
    const splide = new Splide(".collectionDetail__imagesWrapper", {
      arrows: false,
      direction: "ttb",
      heightRatio: "1",
      speed: "2000",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    });

    splide.on("pagination:mounted", function (data) {
      data.list.classList.remove(
        "splide__pagination",
        "splide__pagination--ltr"
      );

      data.list.classList.add("collectionDetail__thumbnail");

      data.items.forEach(function (item) {
        item.li.classList.add("collectionDetail__thumbnailItem");
        item.button.classList.add("collectionDetail__thumbnailButton");
        item.button.classList.remove("splide__pagination__page");

        item.button.innerHTML = `<img
        src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FZ5880-${
          item.page + 1
        }.png?v=1675684622"
        alt="CENTENNIAL 85 LOW"
      />`;
      });
    });
    splide.mount();
  }, []);
  return (
    <>
      <div className="collectionDetail">
        <div className="splide collectionDetail__imagesWrapper">
          <div className="splide__track zort">
            <ul className="splide__list collectionDetail__images">
              <li className="splide__slide collectionDetail__image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FZ5880-1.png?v=1675684622"
                  alt="CENTENNIAL 85 LOW"
                />
              </li>
              <li className="splide__slide collectionDetail__image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FZ5880-2.png?v=1675684622"
                  alt="CENTENNIAL 85 LOW"
                />
              </li>
              <li className="splide__slide collectionDetail__image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FZ5880-3.png?v=1675684622"
                  alt="CENTENNIAL 85 LOW"
                />
              </li>
              <li className="splide__slide collectionDetail__image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FZ5880-4.png?v=1675684622"
                  alt="CENTENNIAL 85 LOW"
                />
              </li>
              <li className="splide__slide collectionDetail__image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FZ5880-5.png?v=1675684622"
                  alt="CENTENNIAL 85 LOW"
                />
              </li>
              <li className="splide__slide collectionDetail__image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FZ5880-6.png?v=1675684622"
                  alt="CENTENNIAL 85 LOW"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="collectionDetail__infos">
          <h1 className="collectionDetail__title">Centennial 85 Low</h1>
          <div className="collectionDetail__priceGuide">
            <span className="collectionDetail__price">R 1,899.00</span>
            <a
              href="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Lemkus_Approved.pdf"
              className="collectionDetail__guide underline"
            >
              Size Guide
            </a>
          </div>
          <div className="collectionDetail__sizes">
            <Button className="collectionDetail__size">6</Button>
            <Button className="collectionDetail__size">7</Button>
            <Button className="collectionDetail__size">8</Button>
            <Button className="collectionDetail__size">9</Button>
          </div>
          <div className="collectionDetail__action">
            <Button className="collectionDetail__addToBag btn-hover">
              <span className="static">Add To Bag</span>
              <span className="hover">
                ADD TO BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
                BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
                BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
                BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </Button>
            <Button className="collectionDetail__wishlist collectionDetail__wishlist--disable btn-hover">
              <span className="static">Wishlist</span>
              <span className="hover">
                Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </Button>
          </div>
          <div className="collectionDetail__description">
            <div
              onClick={(event) => {
                event.currentTarget.classList.toggle(
                  "collectionDetail__descriptionItem--active"
                );
              }}
              className="collectionDetail__descriptionItem"
            >
              <h5 className="collectionDetail__description--title">Details</h5>
              <div className="collectionDetail__plus">
                <span className="collectionDetail__plus--static"></span>
                <span className="collectionDetail__plus--rotate"></span>
              </div>
              <p className="collectionDetail__descriptionContent">
                The adidas Centennial pulled up to the hardwood in '85 and
                quickly set itself apart from the rest. These men's shoes honour
                those basketball roots with a suede upper that nods to their
                beginning. Perforated details on the toe and the spoiler flex on
                the heel give a retro pop of texture.
              </p>
            </div>
            <div
              onClick={(event) => {
                event.currentTarget.classList.toggle(
                  "collectionDetail__descriptionItem--active"
                );
              }}
              className="collectionDetail__descriptionItem"
            >
              <h5 className="collectionDetail__description--title">
                Shipping/Returns
              </h5>
              <div className="collectionDetail__plus">
                <span className="collectionDetail__plus--static"></span>
                <span className="collectionDetail__plus--rotate"></span>
              </div>
              <p className="collectionDetail__descriptionContent">
                <b className="collectionDetail__descriptionContent--title">
                  Shipping:
                </b>
                Lemkus.com exclusively uses RAM, one of the leading Courier
                Companies in SA offering door to door FREE delivery on every
                order over R800.
                <b className="collectionDetail__descriptionContent--title">
                  Returns:
                </b>
                Please see our returns and exchanges section for more
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Culture />
    </>
  );
};

export default CollectionDetail;
