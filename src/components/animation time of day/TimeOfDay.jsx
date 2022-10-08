import React from 'react';
import styles from './style_timeOfDay.module.css'

const TimeOfDay = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sunrise}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>
        </div>
    );
};

export default TimeOfDay;