import React from "react";
import styles from "./header.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const logoPath = `${process.env.PUBLIC_URL}/assets/onuel_logo.svg`;

const Header = ({ user }) => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img className={styles.logo} src={logoPath} alt='logo' />
      </Link>
      <div className={styles.authSection}>
        {user ? (
          <BsFillPersonFill className={styles.myIcon} size='36' />
        ) : (
          <>
            <Link className={styles.link} to='/login'>
              로그인
            </Link>
            <div className={styles.linkDivider}></div>
            <Link className={styles.link} to='/register'>
              회원가입
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
