import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const BrandItem = () => {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      const res = await fetch("http://localhost:5000/brands");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setBrands(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <>
      {brands.map((item) => (
        <div key={item._id} className="brands__item">
          <b>{item.letter}</b>
          {item.brand.map((brand) => (
            <Link
              key={Math.random()}
              target="_blank"
              to={`/collections/${brand.toLowerCase().replaceAll(" ", "-")}`}
            >
              {brand}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
};

export default BrandItem;
