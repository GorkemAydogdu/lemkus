import React from "react";

const CollectionsItem = (props) => {
  return (
    <li key={props.id} className="splide__slide collections__item">
      <a className="collections__link" href="/">
        <img src={props.image} alt={props.name} />
      </a>
    </li>
  );
};

export default CollectionsItem;
