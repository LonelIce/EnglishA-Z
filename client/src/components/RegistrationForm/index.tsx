import React, { FC, useState } from 'react';
import { IRegistrationFormData } from './RegistrationForm.types';
import styles from './RegistrationForm.module.scss';
import AuthorizationService from '../../services/AuthorizationService';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setUserData } from '../../store/slyces/user';

const RegistrationForm: FC = function () {
    const dispatch = useAppDispatch();
    const [registrationFormData, setRegistrationFormData] =
        useState<IRegistrationFormData>({ email: '', password: '' });

    const sendRegistrationData = async () => {
        try {
            const response = await AuthorizationService.registration(
                registrationFormData
            );
            console.log(
                'При попытке зарегистрироваться сервер прислал данные: ',
                response.data
            );
            localStorage.setItem('token', response.data.tokens.accessToken);
            dispatch(setUserData(response.data.user));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    };

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
                    sendRegistrationData();
                }}
            />
        </form>
    );
};

export default RegistrationForm;
