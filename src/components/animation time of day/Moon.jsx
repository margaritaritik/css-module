import React from 'react';
import styles from './moon_style.module.css';

const Moon = () => {
    return (
        <div className={styles.container}>
            <div className={styles.stars}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.container_moon}>
                <li className={styles.spot}></li>
                <li className={styles.spot}></li>
                <li className={styles.spot}></li>
                <li className={styles.spot}></li>

            </div>
        </div>
    );
};

export default Moon;