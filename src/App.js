import React, {useEffect, useState} from "react";
import {Spring, animated, useSpring} from 'react-spring'
import ChangeColorText from "./components/ChangeColorText";
import Cloud_animation from "./components/animation elements/Cloud_animation";
import BlockDestruction from "./components/block destruction/BlockDestruction";
import Revert from "./components/Revert";
import TimeOfDay from "./components/animation time of day/TimeOfDay";
import Moon from "./components/animation time of day/Moon";
import styles from './stylesApp.module.css'

function App() {
    return (
        <div className={styles.containerApp}>
            <div className={styles.item}>
                <Moon/>
            </div>
            <div className={styles.item}>
                <Cloud_animation/>
            </div>
            <div className={styles.item}>
                <TimeOfDay/>
            </div>
            <div className={styles.item}>
                <Moon/>
            </div>
        </div>
    );

}

export default App;
