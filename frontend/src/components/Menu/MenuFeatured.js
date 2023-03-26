import React from "react";

import { Link } from "react-router-dom";

const MenuFeatured = (props) => {
  return (
    <div
      className={`menu__featured ${
        props.item.links.length === 3 ? "menu__featured--width" : ""
      }`}
    >
      <h1 className="menu__title">{props.item.name}</h1>
      <div className="menu__featuredGroup">
        {props.item.featured.map((item) => (
          <div className={`menu__featuredItem`} key={item.id}>
            <Link
              onClick={() => {
                props.clickedButton("");
              }}
              to={`/collections${item.pathname}`}
              className="menu__featuredLink"
            >
              <img src={item.image} alt={item.name} />
            </Link>
            <Link
              to={`/collections${item.pathname}`}
              className="menu__featuredTitle"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFeatured;
