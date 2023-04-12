import React, { useRef, useEffect, useState, useCallback } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
  const smoothScrollWrapper = useRef();
  const [orders, setOrders] = useState([]);

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const getOrderList = useCallback(async () => {
    if (isAuthenticated) {
      const res = await fetch(`http://localhost:5000/orders`);
      const data = await res.json();
      setOrders(data.filter((filtered) => filtered.email === user.email));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    getOrderList();
  }, [getOrderList]);

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="account">
        {isAuthenticated === true ? (
          <h1 className="account__title">My Account</h1>
        ) : (
          <h1 className="account__title">Login</h1>
        )}
        {isAuthenticated !== true && (
          <Button
            onClick={() => loginWithRedirect()}
            type="button"
            className="account__action btn-hover"
          >
            <span className="static">Login</span>
            <span className="hover">
              Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Button>
        )}
        {isAuthenticated && (
          <>
            <section className="account__information">
              <h2 className="account__subtitle">Account Information</h2>
              <span className="account__userName">{user.name}</span>
              <span className="account__email">{user.email}</span>
            </section>
            <section className="account__orderHistory">
              <h2 className="account__subtitle">Order History</h2>
              <ul className="account__orderList">
                {orders.length === 0 && (
                  <p>You haven't placed any orders yet.</p>
                )}
                {orders.length > 0 &&
                  orders.map((order) => (
                    <li className="account__orderItem">
                      <div className="account__productsWrapper">
                        {order.items.map((item) => (
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
                        <span>{order.country}</span>
                        <span>{order.address}</span>
                        <span>{order.userName}</span>
                        <span>{order.email}</span>
                        <span>{order.date}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </section>
            <Button
              onClick={() => logout()}
              type="button"
              className="account__action btn-hover"
            >
              <span className="static">Logout</span>
              <span className="hover">
                Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </Button>
          </>
        )}
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Account;
