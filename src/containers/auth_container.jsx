import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../components/auth/auth";
import { login } from "../modules/auth";

const AuthContainer = ({ mode }) => {
  const { userId, userPassword } = useSelector((state) => ({
    userId: state.auth.userId,
    userPassword: state.auth.userPassword,
  }));
  const dispatch = useDispatch();
  const onLogin = (userInfo) => dispatch(login(userInfo));

  return <Auth mode={mode} onLogin={onLogin} />;
};

export default AuthContainer;
