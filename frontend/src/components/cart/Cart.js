import React, { useRef } from "react";

import CartContent from "./CartContent";
import CartShop from "./CartShop";

const Cart = (props) => {
  const cartRef = useRef();
  return (
    <div ref={cartRef} className="cart">
      <CartContent cartRef={cartRef} />
      <CartShop data={props.data} />
    </div>
  );
};

export default Cart;
