import React, { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm';
import RegistrationForm from '../../components/RegistrationForm';

const Login: FC = function () {
    return (
        <main className={styles.main}>
            <Routes>
                <Route
                    path='/'
                    element={
                        <NavLink to='/login/registration'>
                            <section>
                                <h2>Зарегистрироваться</h2>
                            </section>
                        </NavLink>
                    }
                />
                <Route path='/registration' element={<RegistrationForm />} />
                <Route path='/authorization' element={<LoginForm />} />
            </Routes>
        </main>
    );
};

export default Login;
