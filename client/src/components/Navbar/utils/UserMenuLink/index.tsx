import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserMenuLink.module.scss';
import useTypesSelector from '../../../../hooks/useTypesSelector';
import { UserRoles } from '../../../../models/states/userReducer';

interface UserMenuLinkProps {
    isAuthorization: boolean;
}

const UserMenuLink: FC<UserMenuLinkProps> = function ({ isAuthorization }) {
    const userData = useTypesSelector((state) => state.user.userData);
    return (
        <li className={styles.userMenuLink}>
            {!isAuthorization ? (
                <div className={styles.linkWrapper}>
                    <NavLink to='/login'>
                        <span className={styles.text}>Войти</span>
                        <svg
                            className={styles.icon}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 50 50'
                            width='50px'
                            height='50px'
                        >
                            <path d='M 25 2 C 15.058594 2 7 4.6875 7 8 C 7 8 7 16.082031 7 25 C 7 30.082031 12.417969 44.082031 25 47 C 37.582031 44.082031 43 30.082031 43 25 C 43 16.082031 43 8 43 8 C 43 4.6875 34.941406 2 25 2 Z M 17 11 C 20.4375 11 22.195313 14.074219 22.5625 14.4375 C 23.148438 15.023438 23.148438 15.976563 22.5625 16.558594 C 21.976563 17.144531 21.023438 17.144531 20.441406 16.558594 C 20.027344 16.148438 18.6875 13 16 13 C 14.613281 13 12.953125 13.640625 11 15 C 12.855469 11.878906 15.003906 11 17 11 Z M 20 18.5 C 19.082031 19.40625 17.640625 20 16 20 C 14.359375 20 12.917969 19.40625 12 18.5 C 12.917969 17.59375 14.359375 17 16 17 C 17.640625 17 19.082031 17.59375 20 18.5 Z M 27 43 L 25 45 L 23 43 L 23 38 L 27 38 Z M 34 34 L 27 34 L 25 32 L 23 34 L 16 34 L 11 26 L 17 31 L 21 31 L 24 28 L 26 28 L 29 31 L 33 31 L 39 26 Z M 30 18.5 C 30.917969 17.59375 32.359375 17 34 17 C 35.640625 17 37.082031 17.59375 38 18.5 C 37.082031 19.40625 35.640625 20 34 20 C 32.359375 20 30.917969 19.40625 30 18.5 Z M 34 13 C 31.3125 13 29.972656 16.148438 29.5625 16.5625 C 28.976563 17.148438 28.023438 17.148438 27.441406 16.5625 C 26.855469 15.976563 26.855469 15.023438 27.441406 14.441406 C 27.804688 14.074219 29.5625 11 33 11 C 34.996094 11 37.144531 11.878906 39 15 C 37.046875 13.640625 35.386719 13 34 13 Z' />
                        </svg>
                    </NavLink>
                </div>
            ) : (
                <div className={styles.linkWrapper}>
                    <NavLink to='/profile'>
                        <span className={styles.text}>{userData?.email}</span>
                        {userData?.role === UserRoles.SIMPLE ? (
                            <svg
                                className={styles.icon}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                            >
                                <path d='M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z' />
                            </svg>
                        ) : userData?.role === UserRoles.VIP ? (
                            <svg
                                className={styles.icon}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 576 512'
                            >
                                <path d='M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z' />
                            </svg>
                        ) : (
                            <svg
                                className={styles.icon}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 576 512'
                            >
                                <path d='M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z' />
                            </svg>
                        )}
                    </NavLink>
                </div>
            )}
        </li>
    );
};

export default UserMenuLink;
