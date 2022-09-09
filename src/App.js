import React from "react";
import {Spring, animated, useSpring} from 'react-spring'
import ChangeColorText from "./components/ChangeColorText";
import Cloud_animation from "./components/animation elements/Cloud_animation";
import BlockDestruction from "./components/block destruction/BlockDestruction";

function App() {
    return (
        <div>
           <BlockDestruction/>
        </div>
    );

}

export default App;
