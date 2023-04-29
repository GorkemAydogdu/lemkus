import React, { useState, useEffect, useCallback } from "react";

import OrderItem from "./orderItem";
import { useAuth0 } from "@auth0/auth0-react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  const { isAuthenticated, user } = useAuth0();

  const getOrderList = useCallback(async () => {
    if (isAuthenticated) {
      const res = await fetch(`https://lemkus-backend.onrender.com/orders`);
      const data = await res.json();
      setOrders(data.filter((filtered) => filtered.email === user.email));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    getOrderList();
  }, [getOrderList]);

  return (
    <section className="account__orderHistory">
      <h2 className="account__subtitle">Order History</h2>
      <ul className="account__orderList">
        {orders.length === 0 ? (
          <p>You haven't placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <OrderItem
              key={order._id}
              items={order.items}
              country={order.country}
              address={order.address}
              date={order.date}
              email={order.email}
              userName={order.userName}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default OrderHistory;
