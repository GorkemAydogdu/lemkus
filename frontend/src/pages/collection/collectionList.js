import React, { useState } from "react";

import ReactPaginate from "react-paginate";
import ProductsItem from "../../components/Products/ProductsItem";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CollectionList = ({ categoryName, data, itemPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % data.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
    setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 500);
  };
  return (
    <ul className="collection__productsList products__list">
      {currentItems.map((item) => (
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
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="→"
        onPageChange={handlePageClick}
        className="collection__pagination"
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousClassName="page-item"
        renderOnZeroPageCount={null}
      />
    </ul>
  );
};

export default CollectionList;
