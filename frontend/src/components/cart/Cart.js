import React, { useRef } from "react";

import CartContent from "./CartContent";
import CartShop from "./CartShop";

const Cart = ({ data }) => {
  const cartRef = useRef();
  return (
    <div ref={cartRef} className="cart">
      <CartContent cartRef={cartRef} />
      <CartShop data={data} />
    </div>
  );
};

export default Cart;
