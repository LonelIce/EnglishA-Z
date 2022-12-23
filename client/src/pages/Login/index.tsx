import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Login.module.scss';

const Login: FC = function () {
    return (
        <main className={styles.main}>
            <Link to='/login/registration'>
                <section>
                    <h2>Зарегистрироваться</h2>
                </section>
            </Link>
            <Outlet />
        </main>
    );
};

export default Login;
