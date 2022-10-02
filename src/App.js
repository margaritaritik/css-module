import React, {useEffect, useState} from "react";
import {Spring, animated, useSpring} from 'react-spring'
import ChangeColorText from "./components/ChangeColorText";
import Cloud_animation from "./components/animation elements/Cloud_animation";
import BlockDestruction from "./components/block destruction/BlockDestruction";
import Revert from "./components/Revert";
import TimeOfDay from "./components/animation time of day/TimeOfDay";

function App() {
    return (
        <div>
          <Revert s="привет!"/>
        </div>
    );

}

export default App;
