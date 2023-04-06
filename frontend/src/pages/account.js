import React, { useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
  const smoothScrollWrapper = useRef();

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

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
                <li className="account__orderItem">Order</li>
                <li className="account__orderItem">Financial</li>
                <li className="account__orderItem">Date</li>
                <li className="account__orderItem">Status</li>
                <li className="account__orderItem">Subtotal</li>
              </ul>
              <p>You haven't placed any orders yet.</p>
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
