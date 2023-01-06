import React from "react";

const MenuFeatured = (props) => {
  return (
    <div
      className={`menu__featured ${
        props.item.links.length === 3 ? "menu__featured--width" : ""
      }`}
    >
      <h1 className="menu__title">{props.item.featured.name}</h1>
      <div className="menu__featuredGroup">
        {props.item.featured.items.map((item) => (
          <div className={`menu__featuredItem`} key={item.id}>
            <a href="/" className="menu__featuredLink">
              <img src={item.image} alt={item.name} />
            </a>
            <a href="/" className="menu__featuredTitle">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFeatured;
