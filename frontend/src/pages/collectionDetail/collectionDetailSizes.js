import React, { useRef } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Button from "../../components/UI/Button";

const CollectionDetailSizes = ({ clickedData }) => {
  const buttonsRef = useRef([]);
  let { categoryName } = useParams();
  const navigate = useNavigate();

  const clickedButtonHandler = (event, size) => {
    if (categoryName !== undefined) {
      navigate(
        `/collections/${clickedData.categoryName.toLowerCase()}/${clickedData.name
          .toLowerCase()
          .replaceAll(/[^a-zA-Z0-9]/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/-$/, "")}?id=${clickedData._id}&size=${size}`,
        { replace: true }
      );
    } else {
      navigate(
        `/products/${clickedData.name
          .toLowerCase()
          .replaceAll(/[^a-zA-Z0-9]/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/-$/, "")}?id=${clickedData._id}&size=${size}`,
        { replace: true }
        //https://stackoverflow.com/a/68694698/19191132
      );
    }
    for (let i = 0; i < buttonsRef.current.length; i++) {
      buttonsRef.current[i].classList.remove("collectionDetail__size--active");
    }
    event.currentTarget.classList.add("collectionDetail__size--active");
    document
      .querySelector(".collectionDetail__wishlist")
      .classList.remove("collectionDetail__wishlist--disable");
  };

  return (
    <div className="collectionDetail__sizes">
      {clickedData.sizes.map((size, idx) => (
        <Button
          ref={(el) => (buttonsRef.current[idx] = el)}
          onClick={(event) => clickedButtonHandler(event, size)}
          key={size}
          className="collectionDetail__size"
        >
          {size}
        </Button>
      ))}
    </div>
  );
};

export default CollectionDetailSizes;
