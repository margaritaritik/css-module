import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Avatar from "../../components/Avatar/avatar";
import styles from './styles_main.module.css'

const Main = () => {
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <Avatar/>
                <div className={styles.container_info}>
                    infa
                </div>
            </div>
        </>
    );
};

export default Main;