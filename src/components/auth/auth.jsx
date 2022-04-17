import React from "react";
import styles from "./auth.module.css";

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const Auth = ({ mode, onLogin }) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const [userId, userPassword] = [
      e.target.userId.value,
      e.target.userPassword.value,
    ];

    onLogin({ userId, userPassword });
    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
      <input
        type='text'
        placeholder='아이디 입력'
        name='userId'
        className={styles.authInput}
      />
      <input
        type='password'
        placeholder='비밀번호 입력'
        autoComplete='false'
        name='userPassword'
        className={styles.authInput}
      />
      {mode === "register" && (
        <input
          type='password'
          placeholder='비밀번호 확인'
          autoComplete='false'
          name='userPasswordConfirm'
          className={styles.authInput}
        />
      )}
      <button type='submit' className={styles.authBtn}>
        {textMap[mode]}
      </button>
    </form>
  );
};

export default Auth;
