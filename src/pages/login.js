import React, { useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const smoothScrollWrapper = useRef();
  const forgotFormRef = useRef();

  function toggleForgotButtonHandler() {
    forgotFormRef.current.classList.toggle("showForm");
  }
  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="account">
        <h1 className="account__title">Login</h1>
        <span className="account__error">Incorrect email or password.</span>
        <form className="account__form">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="account__email"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="account__password"
          />
          <Button type="button" className="account__signIn btn-hover">
            <span className="static">Sign in</span>
            <span className="hover">
              Sign in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign
              in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Button>
        </form>
        <div className="account__action">
          <Link to="/account/register" className="account__signUp">
            Don't have an Account?&nbsp;
            <span className="underline">Sign Up</span>
          </Link>
          <Button
            onClick={toggleForgotButtonHandler}
            type="button"
            className="account__forgot"
          >
            Forgot Password?
          </Button>
          <div ref={forgotFormRef} className="account__forgotForm">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="account__email"
            />
            <Button className="account__submit btn-hover">
              <span className="static">Submit</span>
              <span className="hover">
                Submit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default Login;
