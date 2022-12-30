import React, { useState } from "react";

const MenuContext = React.createContext({
  isActive: false,
  toggleMenu: () => {},
});

export const MenuContextProvider = (props) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsActive((prevState) => !prevState);
  };

  return (
    <MenuContext.Provider
      value={{ isActive: menuIsActive, toggleMenu: toggleMenuHandler }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
