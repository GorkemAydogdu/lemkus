import React, { useEffect, useRef } from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Button from "../components/UI/Button";
import Culture from "../components/Culture/Culture";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";
import Footer from "../components/Footer/Footer";

const CollectionDetail = (props) => {
  const smoothScrollWrapper = useRef();
  const buttonsRef = useRef([]);
  const addToBagStatic = useRef();
  const addToBagHover = useRef();

  const wishlistStatic = useRef();
  const wishlistHover = useRef();
  const wishListButton = useRef();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let { productName } = useParams();
  let { categoryName } = useParams();

  const navigate = useNavigate();
  let query = useQuery();

  const clickedSize = query.get("size");
  const id = query.get("id");

  let data = props.data.filter(
    (filtered) =>
      filtered.name
        .toLowerCase()
        .replaceAll(/[^a-zA-Z0-9]/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/-$/, "") === productName || filtered.id.toString() === id
  );

  useEffect(() => {
    const splide = new Splide(".collectionDetail__imagesWrapper", {
      arrows: false,
      direction: "ttb",
      height: "70rem",
      speed: "2000",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      breakpoints: {
        1366: { height: "60rem" },
        1024: {
          direction: "ltr",
          height: "80rem",
        },
        700: { height: "75rem" },
        500: { height: "60rem" },
        300: { height: "50rem" },
      },
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
      });
    });
    splide.mount();
  }, []);

  useEffect(() => {
    if (clickedSize) {
      for (let i = 0; i < buttonsRef.current.length; i++) {
        if (clickedSize === buttonsRef.current[i].innerHTML) {
          buttonsRef.current[i].classList.add("collectionDetail__size--active");
          wishListButton.current.classList.remove(
            "collectionDetail__wishlist--disable"
          );
        }
      }
    }

    let thumbnailButton = document.querySelectorAll(
      ".collectionDetail__thumbnailButton"
    );
    data[0].images.forEach((image, idx) => {
      thumbnailButton[idx].innerHTML = `<img src=${image.url} alt=''/>`;
    });
  }, [clickedSize, data]);

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="collectionDetail">
        <div className="splide collectionDetail__imagesWrapper">
          <div className="splide__track">
            <ul className="splide__list collectionDetail__images">
              {data[0].images.map((image) => (
                <li
                  key={image.id}
                  className="splide__slide collectionDetail__image"
                >
                  <img src={image.url} alt={data[0].name} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="collectionDetail__infos">
          <h1 className="collectionDetail__title">{data[0].name}</h1>
          <div className="collectionDetail__priceGuide">
            <span className="collectionDetail__price">R {data[0].price}</span>
            <a
              href="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Lemkus_Approved.pdf"
              target="_blank"
              className="collectionDetail__guide underline"
            >
              Size Guide
            </a>
          </div>
          <div className="collectionDetail__sizes">
            {data[0].sizes.map((size, idx) => (
              <Button
                ref={(el) => (buttonsRef.current[idx] = el)}
                onClick={(event) => {
                  if (categoryName !== undefined) {
                    navigate(
                      `/collections/${data[0].categoryName.toLowerCase()}/${data[0].name
                        .toLowerCase()
                        .replaceAll(/[^a-zA-Z0-9]/g, "-")
                        .replace(/-{2,}/g, "-")
                        .replace(/-$/, "")}?id=${data[0].id}&size=${size}`,
                      { replace: true }
                      //https://stackoverflow.com/a/68694698/19191132
                    );
                  } else {
                    navigate(
                      `/products/${data[0].name
                        .toLowerCase()
                        .replaceAll(/[^a-zA-Z0-9]/g, "-")
                        .replace(/-{2,}/g, "-")
                        .replace(/-$/, "")}?size=${size}`,
                      { replace: true }
                      //https://stackoverflow.com/a/68694698/19191132
                    );
                  }
                  // setClickedSize(size);
                  for (let i = 0; i < buttonsRef.current.length; i++) {
                    buttonsRef.current[i].classList.remove(
                      "collectionDetail__size--active"
                    );
                  }
                  if (clickedSize === size) {
                    event.target.classList.toggle(
                      "collectionDetail__size--active"
                    );
                  }
                }}
                key={size}
                className={`collectionDetail__size${
                  clickedSize === size ? "collectionDetail__size--active" : ""
                }`}
              >
                {size}
              </Button>
            ))}
          </div>
          <div className="collectionDetail__action">
            <Button
              onMouseEnter={() => {
                addToBagStatic.current.style.display = "none";
                addToBagHover.current.style.display = "inline-block";
              }}
              onMouseLeave={() => {
                addToBagStatic.current.style.display = "inline-block";
                addToBagHover.current.style.display = "none";
              }}
              className="collectionDetail__addToBag btn-hover"
            >
              <span ref={addToBagStatic} className="static">
                Add To Bag
              </span>
              <span ref={addToBagHover} className="hover">
                ADD TO BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
                BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
                BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO
                BAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </Button>
            <Button
              ref={wishListButton}
              onMouseEnter={(event) => {
                if (
                  !event.currentTarget.classList.contains(
                    "collectionDetail__wishlist--disable"
                  )
                ) {
                  wishlistStatic.current.style.display = "none";
                  wishlistHover.current.style.display = "inline-block";
                }
              }}
              onMouseLeave={(event) => {
                if (
                  !event.currentTarget.classList.contains(
                    "collectionDetail__wishlist--disable"
                  )
                ) {
                  wishlistStatic.current.style.display = "inline-block";
                  wishlistHover.current.style.display = "none";
                }
              }}
              className="collectionDetail__wishlist collectionDetail__wishlist--disable btn-hover"
            >
              <span ref={wishlistStatic} className="static">
                Wishlist
              </span>
              <span ref={wishlistHover} className="hover">
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
                {data[0].details}
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
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default CollectionDetail;
