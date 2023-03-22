import React, { useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const smoothScrollWrapper = useRef();

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="account">
        <h1 className="account__title">CREATE ACCOUNT</h1>
        <span className="account__error">Can't be empty</span>
        <form className="account__form">
          <input
            type="text"
            id="FirstName"
            placeholder="First Name"
            className="account__firstName"
          />
          <input
            type="text"
            id="LastName"
            placeholder="Last Name"
            className="account__lastName"
          />
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="account__email"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="account__password"
          />
          <Button type="button" className="account__signIn btn-hover">
            <span className="static">Sign up</span>
            <span className="hover">
              Sign up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign
              up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Button>
        </form>
        <div className="account__action">
          <Link to="/account/login" className="account__signUp">
            Already have an account?&nbsp;
            <span className="underline">Login</span>
          </Link>
        </div>
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default Register;
