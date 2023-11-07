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
                    <div className={styles.info}>
                        <h1>Name</h1>
                        <p>20.02.2023</p>
                        <p>junior frontend developer</p>
                        <p>Навыки:</p>
                        <ul>
                            <li>HTML, CSS, JS, TS</li>
                            <li>C#, C++, C, Java</li>
                            <li>Figma, Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;