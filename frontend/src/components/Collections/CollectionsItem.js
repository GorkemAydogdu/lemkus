import React from "react";
import { Link } from "react-router-dom";

const CollectionsItem = (props) => {
  return (
    <li key={props.id} className="splide__slide collections__item">
      <Link
        className="collections__link"
        to={`/collections/${props.name.toLowerCase().replace(" ", "-")}`}
      >
        <img src={props.image} alt={props.name} />
      </Link>
    </li>
  );
};

export default CollectionsItem;
