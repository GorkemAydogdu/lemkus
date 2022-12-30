import React, { useState } from "react";

const ThemeContext = React.createContext({
  isLocationChanged: false,
  onChanged: () => {},
  onUnChanged: () => {},
});

export const ThemeContextProvider = (props) => {
  const [locationChanged, setLocationChanged] = useState(false);

  const changedHandler = () => {
    setLocationChanged(true);
  };

  const unChangedHandler = () => {
    setLocationChanged(false);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLocationChanged: locationChanged,
        onChanged: changedHandler,
        onUnChanged: unChangedHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
