import React, { FC, useState } from 'react';
import styles from './RegistrationForm.module.scss';
import { IRegistrationFormData } from './RegistrationForm.types';

const RegistrationForm: FC = function () {
  const [registrationFormData, setRegistrationFormData] =
    useState<IRegistrationFormData>({ email: '', password: '' });
  return (
    <form className={styles.form}>
      Зарегистрируйтесь
      <label htmlFor='email'>
        Email
        <input
          type='email'
          name='email'
          value={registrationFormData.email}
          onChange={(e) => {
            setRegistrationFormData({
              ...registrationFormData,
              email: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor='password'>
        Пароль
        <input
          type='password'
          name='password'
          value={registrationFormData.password}
          onChange={(e) => {
            setRegistrationFormData({
              ...registrationFormData,
              password: e.target.value,
            });
          }}
        />
      </label>
      <input
        type='submit'
        value='Зарегистрироваться'
        onClick={(e) => {
          e.preventDefault();
          console.log(
            'Email-',
            registrationFormData.email,
            ' Pass-',
            registrationFormData.password
          );
        }}
      />
    </form>
  );
};

export default RegistrationForm;
