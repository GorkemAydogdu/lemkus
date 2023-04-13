import React from "react";

const OrderItem = ({ items, country, address, userName, email, date }) => {
  return (
    <li className="account__orderItem">
      <div className="account__productsWrapper">
        {items.map((item) => (
          <div className="account__productInfo">
            <img src={item.images[0].url} alt={item.name} />
            <div className="account__productDetails">
              <span>{item.name}</span>
              <span>Size : {item.clickedSize}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: {item.price}</span>
              <span>TotalPrice: {item.totalPrice}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="account__userInfo">
        <span>{country}</span>
        <span>{address}</span>
        <span>{userName}</span>
        <span>{email}</span>
        <span>{date}</span>
      </div>
    </li>
  );
};

export default OrderItem;
