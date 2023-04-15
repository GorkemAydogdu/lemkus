import React, { useEffect } from "react";

//Splidejs
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

const CollectionDetailImages = ({ clickedData, completeFetch }) => {
  useEffect(() => {
    if (completeFetch !== false) {
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
    }
  }, [completeFetch]);

  useEffect(() => {
    if (completeFetch !== false) {
      let thumbnailButton = document.querySelectorAll(
        ".collectionDetail__thumbnailButton"
      );
      clickedData.images.forEach((image, idx) => {
        thumbnailButton[idx].innerHTML = `<img src=${image.url} alt=''/>`;
      });
    }
  }, [clickedData, completeFetch]);
  return (
    <div className="splide collectionDetail__imagesWrapper">
      <div className="splide__track">
        <ul className="splide__list collectionDetail__images">
          {clickedData.images.map((image) => (
            <li
              key={image.id}
              className="splide__slide collectionDetail__image"
            >
              <img src={image.url} alt={clickedData.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionDetailImages;
