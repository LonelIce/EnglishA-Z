import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserMenuLink.module.scss';
import { IUserMenuLinkProps } from './UserMenuLink.types';

const UserMenuLink: FC<IUserMenuLinkProps> = function ({ children, path }) {
    return (
        <li className={styles.userMenuLink}>
            <div className={styles.linkWrapper}>
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : ''
                    }
                >
                    <span className={styles.text}>{children}</span>
                </NavLink>
            </div>
        </li>
    );
};

export default UserMenuLink;
