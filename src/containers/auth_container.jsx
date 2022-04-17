import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Auth from "../components/auth/auth";
import { login } from "../modules/auth";

const AuthContainer = ({ mode }) => {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = (userInfo) => {
    dispatch(login(userInfo));

    if (userId) navigate("/");
  };

  return <Auth mode={mode} onLogin={onLogin} />;
};

export default AuthContainer;
