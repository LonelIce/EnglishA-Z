import React, { FC, useState } from 'react';
import { ILoginFormData } from './LoginForm.types';
import AuthorizationService from '../../services/AuthorizationService';
import useAppDispatch from '../../hooks/useAppDispatch';
import styles from './LoginForm.module.scss';
import { setUserData } from '../../store/slyces/user';

const LoginForm: FC = function () {
    const dispatch = useAppDispatch();
    const [loginFormData, setLoginFormData] = useState<ILoginFormData>({
        email: '',
        password: '',
    });

    const sendLoginFormData = async () => {
        try {
            const response = await AuthorizationService.login(loginFormData);
            console.log(
                'При попытке войти сервер прислал данные: ',
                response.data
            );
            const userData = response.data.user;
            dispatch(setUserData(userData));
        } catch (e: any) {
            console.log(e.response?.data?.message);
            alert(e.response?.data?.message);
        }
    };

    return (
        <form className={styles.form}>
            Авторизуйтесь
            <label htmlFor='email'>
                Email
                <input
                    type='email'
                    name='email'
                    onChange={(e) => {
                        setLoginFormData({
                            ...loginFormData,
                            email: e.target.value,
                        });
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
                        setLoginFormData({
                            ...loginFormData,
                            password: e.target.value,
                        });
                    }}
                />
            </label>
            <input
                type='submit'
                value='Войти'
                onClick={(e) => {
                    e.preventDefault();
                    sendLoginFormData();
                }}
            />
        </form>
    );
};

export default LoginForm;
