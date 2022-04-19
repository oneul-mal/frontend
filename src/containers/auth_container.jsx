import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Auth from "../components/auth/auth";
import { login, register } from "../modules/auth";

const AuthContainer = ({ mode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onAuthSubmit = (userInfo) => {
    mode === "login" ? dispatch(login(userInfo)) : dispatch(register(userInfo));

    navigate("/");
  };

  return <Auth mode={mode} onAuthSubmit={onAuthSubmit} />;
};

export default AuthContainer;
