import React from 'react';
import styles from './moon_style.module.css';

const Moon = () => {
    function randomNumberInRange() {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`;
    }
    return (
        <div className={styles.container}>
            <div className={styles.stars}>

                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRange()}}></span>
            </div>
            <div className={styles.starfall}>
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