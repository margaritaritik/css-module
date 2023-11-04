import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import styles from "./animation_view_styles.module.css";
import Avatar from "../../components/Avatar/avatar";
import Moon from "../../components/animations/animation time of day/Moon";
import Cloud_animation from "../../components/animations/animation clouds/Cloud_animation";
import TimeOfDay from "../../components/animations/animation time of day/TimeOfDay";
import HeartBeatSpinner from "../../components/animations/heart beat spinner/HeartBeatSpinner";
import HeartSpinner from "../../components/animations/heart spinner/HeartSpinner";
import Leaf from "../../components/animations/spiner leaf/leaf";
import Text_gradient from "../../components/animations/text gradient/text_gradient";
import MoonAnimation from "../../components/animations/moon animation/moon_animation";

const Animation = () => {
    return (
        <>
            <Navbar/>
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
                <div className={styles.item_heart}>
                    <HeartBeatSpinner/>
                    <HeartSpinner/>
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
        </>
    );
};

export default Animation;