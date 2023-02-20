import React, { useState } from "react";

const MenuContext = React.createContext();

export const MenuContextProvider = (props) => {
  const [clickedMenu, setClickedMenu] = useState({ gender: "", itemName: "" });
  //https://dev.to/efearas/how-to-usecontext-and-set-value-of-context-in-child-components-in-3-steps-3j9h
  return (
    <MenuContext.Provider value={[clickedMenu, setClickedMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
