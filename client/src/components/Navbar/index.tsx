import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import UserMenuLink from './utils/UserMenuLink';
import useTypesSelector from '../../hooks/useTypesSelector';

const Navbar: FC = function () {
    const isAuthorization = useTypesSelector(
        (state) => state.user.isAuthorization
    );
    return (
        <header className={styles.header}>
            <div className={styles.wrapperLogo}>
                <div className={styles.logo}>
                    <svg className={styles.logoImg} viewBox='0 0 417 293'>
                        <path
                            id='A-Z_1'
                            data-name='A-Z 1'
                            className='cls-1'
                            d='M237.82,279.309L215.016,293H201.984l-22.8-13.69H0V26.538H60.6L148.44,1,208.5,26.538,268.071,1l89.311,25.538H417V279.309H237.82Zm-35.836-242.5L148.44,13.722,32.578,50.582v198.33l60.27-27.784,55.592-9.779,53.544,16.686V36.806ZM186.039,229.014l-37.6-7.886L53.754,248.912h148.23ZM268.071,13.4l-53.055,23.41V229.014l53.055-17.665,55.756,9.779,60.6,22.891V50.909ZM215.016,248.912H365.852l-97.781-27.784-36.621,6.907ZM407.227,36.806h-22.8l9.773,6.845V258.7H22.8V43.651l9.773-6.845H9.773V269.531H186.039l15.945,9.778h13.032l16.434-9.778H407.227V36.806ZM350.752,186.2v9.875H231.309v-7.022L312.837,60.894H265.279q-12.276,0-18.738,6.254t-6.466,20.3H233.5V68.794q0-17.554,18.628-17.556h99.719L265.937,186.2h84.815ZM133.659,156.773H77.486L60.17,195.219H49.189L111.485,55.8h9.5l47.3,112.8q8.023,19.645,21.963,21.124v5.281a39.216,39.216,0,0,1-10.137,1.056,51.4,51.4,0,0,1-24.074-5.6q-10.77-5.6-17.527-21.863ZM106.417,92.135l-24.5,55.133h47.725Z'
                        />
                    </svg>
                </div>
            </div>
            <nav className={styles.nav}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.menuIcon}
                    viewBox='0 0 448 512'
                >
                    <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
                </svg>
                <ul className={styles.links}>
                    <li className={styles.navLinksWrapper}>
                        <ul className={styles.navLinks}>Основные ссылки</ul>
                    </li>
                    {isAuthorization ? (
                        <UserMenuLink path='/profile'>Профиль</UserMenuLink>
                    ) : (
                        <UserMenuLink path='/login'>Войти</UserMenuLink>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
