import React from 'react';
import styles from './styles_avatar.module.css'
import ava from './ava.jpg'

const Avatar = () => {
    return (
        <div className={styles.container}>
            <img   className={styles.ava} src={ava} alt="ava" />
        </div>
    );
};

export default Avatar;