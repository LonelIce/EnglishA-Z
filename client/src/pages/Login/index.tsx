import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm';

const Login: FC = function () {
    return (
        <main className={styles.main}>
            <LoginForm />
            <Link to='/login/registration'>
                <section>
                    <h4>Зарегистрироваться</h4>
                </section>
            </Link>
            <Outlet />
        </main>
    );
};

export default Login;
