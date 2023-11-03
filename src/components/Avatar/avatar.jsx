import React from 'react';
import styles from './styles_avatar.module.css'
import ava from './ava.jpg'

const Avatar = () => {
    return (
        <div className={styles.container}>
            <img style={{width:'30%',height:'30%'}}  className={styles.ava} src={ava} alt="ava" />
        </div>
    );
};

export default Avatar;