import React from "react";

import ListItem from "../UI/ListItem";

const MenuLinks = (props) => {
  return (
    <div
      className={`menu__links ${
        props.links.length === 3 ? "menu__links--width" : ""
      }`}
    >
      {props.links.map((link) => (
        <div className={`menu__${link.category.toLowerCase()}`} key={link.id}>
          <h1 className="menu__title">{link.category}</h1>
          <ul className="menu__list">
            {link.items.map((item) => (
              <ListItem key={item} className="menu__item">
                <a href="/" className="menu__link">
                  {item}
                </a>
              </ListItem>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuLinks;
