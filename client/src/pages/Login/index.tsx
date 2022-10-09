/* eslint-disable */
import React, { FC } from 'react';
import styles from './Login.module.scss'

const Login: FC = function () {
  return <main>
      <form className={styles.form}>
          Воити
      </form>
      <form className={styles.form}>
          Зарегистрироваться
      </form>
  </main>;
};

export default Login;
/* eslint-enable */
