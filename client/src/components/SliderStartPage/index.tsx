import React, { FC, useState } from 'react';
import { SLIDES, FADE_DURATION } from './constans';
import { ISliderData } from './SliderStartPage.types';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import styles from './SliderStartPage.module.scss';

const SliderStartPage: FC = function () {
    const [sliderData, setSliderData] = useState<ISliderData>({
        slide: 0,
        fadeState: 'fadeIn',
        currentTimer: null,
    });

    const handlerClick = (move: number) => {
        const timer = setTimeout(() => {
            setSliderData({
                ...sliderData,
                slide: sliderData.slide + move,
                fadeState: 'fadeIn',
            });
        }, FADE_DURATION);
        if (sliderData.currentTimer) clearTimeout(sliderData.currentTimer);
        setSliderData({
            ...sliderData,
            fadeState: 'fadeOut',
            currentTimer: timer,
        });
    };

    console.log('SliderStartPage');

    return (
        <div className={styles.slidersWrapper}>
            <div
                className={[styles.slide, styles[sliderData.fadeState]].join(
                    ' '
                )}
                style={{
                    backgroundImage: `url(${SLIDES[sliderData.slide].image})`,
                    transitionDuration: `${FADE_DURATION}ms`,
                }}
            >
                {SLIDES[sliderData.slide].text}
            </div>
            {sliderData.slide < SLIDES.length - 1 && (
                <button
                    type='button'
                    className={[styles.arrowRight, styles.arrow].join(' ')}
                    onClick={() => {
                        handlerClick(1);
                    }}
                >
                    <Arrow />
                </button>
            )}
            {sliderData.slide > 0 && (
                <button
                    type='button'
                    className={[styles.arrowLeft, styles.arrow].join(' ')}
                    onClick={() => {
                        handlerClick(-1);
                    }}
                >
                    <Arrow />
                </button>
            )}
        </div>
    );
};

export default SliderStartPage;
