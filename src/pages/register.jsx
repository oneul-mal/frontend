import React from "react";
import AuthContainer from "../containers/auth_container";
import HeaderContainer from "../containers/header_container";

const Register = () => {
  return (
    <>
      <HeaderContainer />
      <AuthContainer mode='register' />
    </>
  );
};

export default Register;
