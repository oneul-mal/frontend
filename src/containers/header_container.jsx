import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Header from "../components/header/header";

const HeaderContainer = () => {
  const user = useSelector((state) => state.auth.userId, shallowEqual);

  return <Header user={user} />;
};

export default React.memo(HeaderContainer);
