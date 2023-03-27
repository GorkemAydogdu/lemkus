import React from "react";
import { Link } from "react-router-dom";

const ProductsItem = (props) => {
  return (
    <li className="splide__slide products__item">
      <div className="products__container">
        <Link
          to={`/products/${props.name
            .toLowerCase()
            .replaceAll(/[^a-zA-Z0-9]/g, "-")
            .replace(/-{2,}/g, "-")
            .replace(/-$/, "")}?id=${props.id}`}
          className="products__image"
        >
          <div className="products__logo">
            <img key={props.id} src={props.logo} alt={props.brand} />
          </div>
          {props.images.map((img) => (
            <img
              key={img.id}
              className={`products__image--${img.id}`}
              src={img.url}
              alt={props.name}
            />
          ))}
        </Link>

        <div className="products__infos">
          <div className="products__container--size">
            {props.sizes.map((size) => (
              <Link
                key={size}
                to={`/products/${props.name
                  .toLowerCase()
                  .replaceAll(/[^a-zA-Z0-9]/g, "-")
                  .replace(/-{2,}/g, "-")
                  .replace(/-$/, "")}?id=${props.id}&size=${size}`}
              >
                {size}
              </Link>
            ))}
          </div>
          <Link
            to={`/products/${props.name
              .toLowerCase()
              .replaceAll(/[^a-zA-Z0-9]/g, "-")
              .replace(/-{2,}/g, "-")
              .replace(/-$/, "")}?id=${props.id}`}
            className="products__container--title"
          >
            {props.name}
          </Link>
          <span className="products__container--price">R {props.price}</span>
        </div>
      </div>
    </li>
  );
};

export default ProductsItem;
