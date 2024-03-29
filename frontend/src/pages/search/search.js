import React, { useRef, useState } from "react";

//components
import SearchContent from "./searchContent";
import Footer from "../../components/Footer/Footer";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Button from "../../components/UI/Button";

import X from "../../assets/x.svg";
import SearchIcon from "../../assets/search.svg";

const Search = ({ products }) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const smoothScrollWrapper = useRef();
  const inputRef = useRef();

  const changeHandler = (event) => {
    const query = event.target.value;
    let updatedList = [...products];
    if (query !== "") {
      updatedList = updatedList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    } else {
      updatedList = [];
    }
    setFilteredProduct(updatedList);
  };

  const deleteHandler = () => {
    inputRef.current.value = "";
  };
  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="search">
        <div className="search__box">
          <span>Looking For Something?</span>
          <div className="search__input">
            <input
              ref={inputRef}
              onChange={changeHandler}
              type="text"
              placeholder="Search by product"
            />

            <Button className="search__button">
              <SearchIcon />
            </Button>
            <Button
              onClick={deleteHandler}
              className="search__button search__button--delete"
            >
              <X />
            </Button>
          </div>
        </div>
        {filteredProduct.length > 0 && (
          <SearchContent filteredProduct={filteredProduct} />
        )}
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Search;
