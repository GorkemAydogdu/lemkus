import React, { useRef } from "react";

import CartContent from "./CartContent";
import CartShop from "./CartShop";

const Cart = () => {
  const cartRef = useRef();

  return (
    <div ref={cartRef} className="cart">
      <CartContent cartRef={cartRef} />
      <CartShop />
    </div>
  );
};

export default Cart;
