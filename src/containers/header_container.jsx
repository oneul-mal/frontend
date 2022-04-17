import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/header";

const HeaderContainer = () => {
  const user = useSelector((state) => state.auth.userId);
  return <Header user={user} />;
};

export default HeaderContainer;
