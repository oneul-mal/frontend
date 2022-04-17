import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contents from "../components/contents/contents";
import { getContents } from "../modules/contents";

const ContentsContainer = () => {
  const contents = useSelector((state) => state.contents.contents);
  const dispatch = useDispatch();

  console.log(contents);
  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  return <Contents />;
};

export default ContentsContainer;
