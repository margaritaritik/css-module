import React, {useEffect, useState} from "react";
import {Spring, animated, useSpring} from 'react-spring'
import ChangeColorText from "./components/ChangeColorText";
import Cloud_animation from "./components/animation clouds/Cloud_animation";
import BlockDestruction from "./components/block destruction/BlockDestruction";
import Revert from "./components/Revert";
import TimeOfDay from "./components/animation time of day/TimeOfDay";
import styles from './stylesApp.module.css'
import Moon from "./components/animation time of day/Moon";
import HeartBeatSpinner from "./components/heart beat spinner/HeartBeatSpinner";
import HeartSpinner from "./components/heart spinner/HeartSpinner";
import Leaf from "./components/spiner leaf/leaf";
import Avatar from "./components/Avatar/avatar";
import Text_gradient from "./components/text gradient/text_gradient";
import MoonAnimation from "./components/moon animation/moon_animation";

function App() {
    return (
        <div className={styles.containerApp}>

                <Avatar/>

            <div className={styles.item}>
                <Moon/>
            </div>
            <div className={styles.item}>
                <Cloud_animation/>
            </div>
            <div className={styles.item}>
                <TimeOfDay/>
            </div>
            <div className={styles.item_heart}>
                <HeartBeatSpinner/>
                <HeartSpinner/>
            </div>
            <div className={styles.item}>
                <ChangeColorText/>

            </div>
            <div className={styles.item}>
                <Leaf/>
            </div>
            <div className={styles.item}>
                <Text_gradient/>
            </div>
            <div className={styles.item}>
                <MoonAnimation/>
            </div>

        </div>
    );

}

export default App;
