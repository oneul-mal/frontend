import React from "react";
import styles from "./auth.module.css";

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const Auth = ({ mode, onAuthSubmit }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const [userId, userPassword] = [
      e.target.userId.value,
      e.target.userPassword.value,
    ];
    if (mode === "register") {
      const userPasswordConfirm = e.target.userPasswordConfirm.value;

      if (userPassword !== userPasswordConfirm) {
        alert("비밀번호를 값 다름ㅠ");
        e.target.reset();

        return;
      }
    }

    onAuthSubmit({ userId, userPassword });
    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
