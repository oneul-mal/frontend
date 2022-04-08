import React from "react";
import styles from "./auth.module.css";

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const Auth = ({ mode }) => {
  return (
    <form className={styles.form}>
      <input type='text' placeholder='아이디 입력' />
      <input type='password' placeholder='비밀번호 입력' autoComplete='false' />
      {mode === "register" && (
        <input
          type='password'
          placeholder='비밀번호 확인'
          autoComplete='false'
        />
      )}
      <button>{textMap[mode]}</button>
    </form>
  );
};

export default Auth;
