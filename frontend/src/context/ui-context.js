import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UIContext = React.createContext({
  menuIsActive: false,
  cartIsActive: false,
  wishlistIsActive: false,
  isLocationChanged: false,
  wishlistClicked: false,
  toggleWishlistDetail: () => {},
  toggleMenu: () => {},
  toggleCart: () => {},
  toggleWishlist: () => {},
  onChanged: () => {},
  onUnChanged: () => {},
});

export const UIContextProvider = (props) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [cartIsActive, setCartIsActive] = useState(false);
  const [locationChanged, setLocationChanged] = useState(false);

  const [wishlistIsActive, setWishlistIsActive] = useState(false);
  const [wishlistClicked, setWishlistClicked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuIsActive(false);
  }, [location]);

  const toggleMenuHandler = () => {
    setMenuIsActive((prevState) => !prevState);
  };

  const toggleCartHandler = () => {
    setCartIsActive((prevState) => !prevState);
  };

  const toggleWishlistHandler = () => {
    setWishlistIsActive((prevState) => !prevState);
  };

  const toggleWishlistDetailHandler = () => {
    setWishlistClicked((prevState) => !prevState);
  };

  const changedHandler = () => {
    setLocationChanged(true);
  };

  const unChangedHandler = () => {
    setLocationChanged(false);
  };

  return (
    <UIContext.Provider
      value={{
        menuIsActive: menuIsActive,
        cartIsActive: cartIsActive,
        wishlistIsActive: wishlistIsActive,
        isLocationChanged: locationChanged,
        wishlistClicked: wishlistClicked,
        toggleWishlistDetail: toggleWishlistDetailHandler,
        onChanged: changedHandler,
        onUnChanged: unChangedHandler,
        toggleMenu: toggleMenuHandler,
        toggleCart: toggleCartHandler,
        toggleWishlist: toggleWishlistHandler,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
