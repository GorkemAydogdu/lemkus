import React from "react";

import ProductsItem from "../../components/Products/ProductsItem";

const CollectionList = ({ categoryName, data }) => {
  return (
    <ul className="collection__productsList products__list">
      {data.map((item) => (
        <ProductsItem
          className="collection__productsItem products__item"
          categoryName={categoryName}
          key={item._id}
          id={item._id}
          logo={item.logo}
          name={item.name}
          images={item.images.slice(0, 2)}
          sizes={item.sizes}
          price={item.price}
          brand={item.brand}
        />
        //   <li key={item._id} className="collection__productsItem products__item">
        //     {/*
        // https://stackoverflow.com/a/9705227
        // https://stackoverflow.com/a/36630251
        // */}
        //     <div className="products__container">
        //       <Link
        //         to={`/collections/${categoryName}/${item.name
        //           .toLowerCase()
        //           .replaceAll(/[^a-zA-Z0-9]/g, "-")
        //           .replace(/-{2,}/g, "-")
        //           .replace(/-$/, "")}?id=${item._id}`}
        //         className="products__image"
        //       >
        //         <div className="products__logo">
        //           <img src={item.logo} alt={item.brand} />
        //         </div>

        //         {item.images.slice(0, 2).map((image) => (
        //           <img
        //             key={image.id}
        //             className={`products__image--${image.id}`}
        //             src={image.url}
        //             alt={item.name}
        //           />
        //         ))}
        //       </Link>

        //       <div className="products__infos">
        //         <div className="products__container--size">
        //           {item.sizes.map((size) => (
        //             <Link
        //               key={size}
        //               to={`/collections/${categoryName}/${item.name
        //                 .toLowerCase()
        //                 .replaceAll(/[^a-zA-Z0-9]/g, "-")
        //                 .replace(/-{2,}/g, "-")
        //                 .replace(/-$/, "")}?id=${item._id}&size=${size}`}
        //             >
        //               {size}
        //             </Link>
        //           ))}
        //         </div>
        //         <Link
        //           to={`/collections/${categoryName}/${item.name
        //             .toLowerCase()
        //             .replaceAll(/[^a-zA-Z0-9]/g, "-")
        //             .replace(/-{2,}/g, "-")
        //             .replace(/-$/, "")}?id=${item._id}`}
        //           className="products__container--title"
        //         >
        //           {item.name}
        //         </Link>
        //         <span className="products__container--price">R {item.price}</span>
        //       </div>
        //     </div>
        //   </li>
      ))}
    </ul>
  );
};

export default CollectionList;
