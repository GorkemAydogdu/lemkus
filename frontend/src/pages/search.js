import React, { useEffect, useRef, useState } from "react";

//components
import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Button from "../components/UI/Button";

import { ReactComponent as X } from "../assets/x.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { Link } from "react-router-dom";

const Search = () => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const smoothScrollWrapper = useRef();
  const inputRef = useRef();
  async function getProduct() {
    try {
      const res = await fetch("http://localhost:5000/product");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  const changeHandler = (event) => {
    const query = event.target.value;
    let updatedList = [...product];
    if (query !== "") {
      updatedList = updatedList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    } else {
      updatedList = [];
    }

    console.log(updatedList);
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
          <ul className="search__list search__content">
            <li className="search__item">
              <span className="search__title">Products</span>
              <ul className="search__list">
                {filteredProduct !== [] &&
                  filteredProduct.slice(0, 10).map((item) => (
                    <li key={item._id} className="search__item">
                      <Link
                        className="search__link"
                        to={`/products/${item.name
                          .toLowerCase()
                          .replaceAll(/[^a-zA-Z0-9]/g, "-")
                          .replace(/-{2,}/g, "-")
                          .replace(/-$/, "")}?id=${item._id}`}
                      >
                        <div className="search__image">
                          <img src={item.images[0].url} alt={item.name} />
                        </div>
                        <div className="search__item--detail">
                          <span className="search__item--title">
                            {item.name}
                          </span>
                          <span className="search__item--brand">
                            {item.brand}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        )}
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Search;
