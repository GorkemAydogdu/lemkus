import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ListItem from "../UI/ListItem";
import MenuContext from "../../context/menu-context";

const MenuLinks = (props) => {
  const [clickedMenu, setClickedMenu] = useContext(MenuContext);
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
              <ListItem key={item.id} className="menu__item">
                <Link
                  onClick={() => {
                    localStorage.setItem(
                      "categoryName",
                      JSON.stringify(props.name)
                    );

                    setClickedMenu({
                      gender: link.gender,
                      itemName: item.name,
                    });
                    // console.log(item.name);
                    // console.log(link.gender);
                    // localStorage.setItem("gender", JSON.stringify(link.gender));
                    // localStorage.setItem("itemName", JSON.stringify(item.name));
                    // setMenuName(props.name);
                  }}
                  to={`/collections${item.pathname}`}
                  className="menu__link"
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuLinks;
