import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserMenuLink.module.scss';

const UserMenuLink: FC = function () {
    return (
        <li className={styles.userMenuLink}>
            <div className={styles.linkWrapper}>
                <NavLink
                    to='/login'
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : ''
                    }
                >
                    <span className={styles.text}>Войти</span>
                </NavLink>
            </div>
        </li>
    );
};

export default UserMenuLink;
