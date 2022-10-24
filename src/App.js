import React, {useEffect, useState} from "react";
import {Spring, animated, useSpring} from 'react-spring'
import ChangeColorText from "./components/ChangeColorText";
import Cloud_animation from "./components/animation elements/Cloud_animation";
import BlockDestruction from "./components/block destruction/BlockDestruction";
import Revert from "./components/Revert";
import TimeOfDay from "./components/animation time of day/TimeOfDay";
import Moon from "./components/animation time of day/Moon";

function App() {
    return (
        <div>
         <Moon/>
        </div>
    );

}

export default App;
