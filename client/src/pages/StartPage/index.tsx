/* eslint-disable */
import React, {FC} from 'react';
import SliderStartPage from '../../components/SliderStartPage';
import styles from './StartPage.module.scss';

const StartPage: FC = function () {
    return (
        <main className={styles.main}>
            <SliderStartPage/>
            <div className={styles.greetingWrapper}>Блок приветствия</div>
        </main>
    );
};

export default StartPage;
/* eslint-enable */
