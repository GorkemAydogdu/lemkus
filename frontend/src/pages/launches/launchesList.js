import React from "react";
import ProductsItem from "../../components/Products/ProductsItem";

const LaunchesList = ({ product }) => {
  return (
    <ul className="launches__list launches__list--all">
      {product
        .filter((filtered) => filtered.categoryName === "Launches")
        .map((item) => (
          <ProductsItem
            className="launches__item launches__item--all"
            key={item._id}
            logo={item.logo}
            id={item._id}
            name={item.name}
            images={item.images.slice(0, 2)}
            sizes={item.sizes}
            price={item.price}
            brand={item.brand}
          />
          //   <li key={item._id} className="launches__item launches__item--all">
          //     <div className="products__container">
          //       <Link
          //         to={`/products/${item.name
          //           .toLowerCase()
          //           .replaceAll(/[^a-zA-Z0-9]/g, "-")
          //           .replace(/-{2,}/g, "-")
          //           .replace(/-$/, "")}?id=${item._id}`}
          //         className="products__image"
          //       >
          //         <div className="products__logo">
          //           <img src={item.logo} alt={item.name} />
          //         </div>
          //         {item.images.slice(0, 2).map((img) => (
          //           <img
          //             key={img.id}
          //             className={`products__image--${img.id}`}
          //             src={img.url}
          //             alt={props.name}
          //           />
          //         ))}
          //       </Link>

          //       <div className="products__infos">
          //         <div className="products__container--size">
          //           {item.sizes.map((size) => (
          //             <Link
          //               to={`/products/${item.name
          //                 .toLowerCase()
          //                 .replaceAll(/[^a-zA-Z0-9]/g, "-")
          //                 .replace(/-{2,}/g, "-")
          //                 .replace(/-$/, "")}?id=${item._id}&size=${size}`}
          //               key={size}
          //             >
          //               {size}
          //             </Link>
          //           ))}
          //         </div>
          //         <Link
          //           to={`/products/${item.name
          //             .toLowerCase()
          //             .replaceAll(/[^a-zA-Z0-9]/g, "-")
          //             .replace(/-{2,}/g, "-")
          //             .replace(/-$/, "")}?id=${item._id}`}
          //           className="products__container--title"
          //         >
          //           {item.name}
          //         </Link>
          //         <span className="products__container--price">
          //           {item.price}
          //         </span>
          //       </div>
          //     </div>
          //   </li>
        ))}
    </ul>
  );
};

export default LaunchesList;
