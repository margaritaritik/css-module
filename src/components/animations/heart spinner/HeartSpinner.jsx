import React from 'react';
import styles from './stylesHeartSpinner.module.css'

const HeartSpinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heart}></div>
        </div>
    );
};

export default HeartSpinner;