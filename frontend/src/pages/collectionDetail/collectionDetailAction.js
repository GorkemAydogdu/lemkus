import React, { useRef, useContext } from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

import UIContext from "../../context/ui-context";

import Button from "../../components/UI/Button";
import ButtonHover from "../../components/UI/ButtonHover";
import ButtonStatic from "../../components/UI/ButtonStatic";

import { useAuth0 } from "@auth0/auth0-react";

const CollectionDetailAction = ({
  completeFetch,
  clickedData,
  clickedSize,
}) => {
  const uiCtx = useContext(UIContext);

  const addToBagStatic = useRef();
  const addToBagHover = useRef();
  const wishlistStatic = useRef();
  const wishlistHover = useRef();

  const dispatch = useDispatch();
  const { user } = useAuth0();

  function addToCartHandler() {
    if (completeFetch !== false) {
      uiCtx.toggleCart();
      const { name, price, _id, images } = clickedData;
      dispatch(
        cartActions.addItemToCart({
          _id,
          name,
          price,
          images,
          clickedSize,
        })
      );
    }
  }

  const addWishlistHandler = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/wishlist/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: clickedData._id,
        name: clickedData.name,
        price: clickedData.price,
        clickedSize: clickedSize,
        images: clickedData.images,
        userName: user.name,
        email: user.email,
      }),
    });
    window.location.reload();
  };

  return (
    <div className="collectionDetail__action">
      <Button
        onClick={addToCartHandler}
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
        <ButtonStatic ref={addToBagStatic}>Add To Bag</ButtonStatic>
        <ButtonHover ref={addToBagHover}>ADD TO BAG</ButtonHover>
      </Button>
      <Button
        onClick={addWishlistHandler}
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
        <ButtonStatic ref={wishlistStatic}>Wishlist</ButtonStatic>
        <ButtonHover ref={wishlistHover}>Wishlist</ButtonHover>
      </Button>
    </div>
  );
};

export default CollectionDetailAction;
