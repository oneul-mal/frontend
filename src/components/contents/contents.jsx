import React from "react";
import styles from "./contents.module.css";
import { BsSuitHeart } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

const Item = ({ content }) => {
  return (
    <li className={styles.item}>
      <div className={styles.meta}>
        <h3 className={styles.item__title}>{content.title}</h3>
        <div className={styles.item__info}>
          <BsSuitHeart />
          <span>{content.sympathies}</span>
          <FaRegCommentDots />
          <span>{content.comments}</span>
          <span className={styles.writer}>{content.writer}</span>
        </div>
      </div>

      <div className={styles.content__container}>
        <p>{content.content}</p>
      </div>
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
