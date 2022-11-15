import React, { FC, useState } from 'react';
import styles from './LoginForm.module.scss';
import { ILoginFormData } from './LoginForm.types';

const LoginForm: FC = function () {
  const [loginFormData, setLoginFormData] = useState<ILoginFormData>({
    email: '',
    password: '',
  });
  return (
    <form className={styles.form}>
      Авторизуйтесь
      <label htmlFor='email'>
        Email
        <input
          type='email'
          name='email'
          onChange={(e) => {
            setLoginFormData({ ...loginFormData, email: e.target.value });
          }}
          value={loginFormData.email}
        />
      </label>
      <label htmlFor='password'>
        Пароль
        <input
          type='password'
          name='password'
          value={loginFormData.password}
          onChange={(e) => {
            setLoginFormData({ ...loginFormData, password: e.target.value });
          }}
        />
      </label>
      <input
        type='submit'
        value='Войти'
        onClick={(e) => {
          e.preventDefault();
          console.log(
            'Email-',
            loginFormData.email,
            'pass',
            loginFormData.password
          );
        }}
      />
    </form>
  );
};

export default LoginForm;
