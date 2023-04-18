import React, { useRef } from "react";

import AccountInformation from "./accountInformation";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";
import OrderHistory from "./orderHistory";
import { RotatingLines } from "react-loader-spinner";

const Account = () => {
  const smoothScrollWrapper = useRef();

  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  return (
    <SmoothScrollWrapper
      ref={smoothScrollWrapper}
      className="pageSmooth pageAccount"
    >
      <div className="account">
        {isLoading === true ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration=".75"
            width="96"
            visible={true}
          />
        ) : isAuthenticated === true ? (
          <>
            <h1 className="account__title">My Account</h1>
            <AccountInformation />
            <OrderHistory />
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
        ) : (
          <>
            <h1 className="account__title">Login</h1>
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
          </>
        )}
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Account;
