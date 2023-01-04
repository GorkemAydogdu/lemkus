import React, { useState } from "react";

const UIContext = React.createContext({
  menuIsActive: false,
  cartIsActive: false,
  isLocationChanged: false,
  toggleMenu: () => {},
  toggleCart: () => {},
  onChanged: () => {},
  onUnChanged: () => {},
});

export const UIContextProvider = (props) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [cartIsActive, setCartIsActive] = useState(false);
  const [locationChanged, setLocationChanged] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsActive((prevState) => !prevState);
  };

  const toggleCartHandler = () => {
    setCartIsActive((prevState) => !prevState);
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
        isLocationChanged: locationChanged,
        onChanged: changedHandler,
        onUnChanged: unChangedHandler,
        toggleMenu: toggleMenuHandler,
        toggleCart: toggleCartHandler,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
