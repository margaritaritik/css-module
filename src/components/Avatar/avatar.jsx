import React from 'react';
import styles from './styles_avatar.module.css'
import ava from './ava.jpg'

const Avatar = () => {
    return (
        <div>
            <img style={{width:'50%',height:'50%'}}  className={styles.ava} src={ava} alt="ava" />
        </div>
    );
};

export default Avatar;