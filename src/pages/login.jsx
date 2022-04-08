import React from "react";
import AuthContainer from "../containers/auth_container";
import HeaderContainer from "../containers/header_container";

const Login = () => {
  return (
    <>
      <HeaderContainer />
      <AuthContainer mode='login' />
    </>
  );
};

export default Login;
