import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const AccountInformation = () => {
  const { user } = useAuth0();

  return (
    <>
      <section className="account__information">
        <h2 className="account__subtitle">Account Information</h2>
        <span className="account__userName">{user.name}</span>
        <span className="account__email">{user.email}</span>
      </section>
    </>
  );
};

export default AccountInformation;
