import React from "react";
import styles from "./contents.module.css";
import { BsSuitHeart } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

const Item = ({ content }) => {
  return (
    <li className={styles.item}>
      <h3>{content.title}</h3>
      <div className={styles.meta}>
        <div>
          <span>
            <BsSuitHeart />
            {content.sympathies}
          </span>
          <span>
            <FaRegCommentDots />
            {content.comments}
          </span>
        </div>
        <div>{content.writer}</div>
      </div>
      <div className={styles.content_container}>{content.content}</div>
    </li>
  );
};

const Contents = ({ contents }) => {
  return (
    <ul className={styles.container}>
      {contents.map((content) => (
        <Item key={content.id} content={content} />
      ))}
    </ul>
  );
};

export default Contents;
