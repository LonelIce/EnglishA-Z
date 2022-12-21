import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CustomNavLink.module.scss';

interface CustomNavLinkProps {
    path: string;
}

const CustomNavLink: FC<CustomNavLinkProps> = function ({ children, path }) {
    return (
        <li className={styles.wrapperLink}>
            <NavLink to={path}>
                <span className={styles.text}>{children}</span>
            </NavLink>
        </li>
    );
};

export default CustomNavLink;
