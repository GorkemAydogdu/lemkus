import React, { useRef } from "react";

import AccountInformation from "./accountInformation";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";
import OrderHistory from "./orderHistory";

const Account = () => {
  const smoothScrollWrapper = useRef();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="account">
        {isAuthenticated === true ? (
          <h1 className="account__title">My Account</h1>
        ) : (
          <h1 className="account__title">Login</h1>
        )}
        {isAuthenticated && <AccountInformation />}
        {isAuthenticated && <OrderHistory />}
        {isAuthenticated !== true ? (
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
        ) : (
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
        )}
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Account;
